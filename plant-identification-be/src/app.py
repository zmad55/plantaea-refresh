from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_cors import cross_origin
from PIL import Image
from collections import Counter
import uuid

import train
import feature_extraction

import numpy as np
import ast


app = Flask(__name__)

@app.route("/api/hello")
def handle_form_submission():
    return {"message": ["Hello World"]}
    

@app.route('/api/identifyPlant', methods=['POST'])
# @cross_origin()
def process_image():
    # Get the image data from the request payload
    image_data = request.files['file']
    if image_data:
        image = Image.open(image_data)

        processed_image_path = "../images/" + str(uuid.uuid4()) + '.jpg'
        image.save(processed_image_path)

        integral_features = str(feature_extraction.main(processed_image_path))
        input_hist = integral_features.replace(".", ".0,")
        input_hist = ast.literal_eval(input_hist)
        input_hist = np.array([input_hist])
        query = input_hist.reshape(1, -1)
        # Perform the nearest neighbors search
        distances, indices = nbrs.kneighbors(query)

        predictions = {"rank" : [], "species" : [], "distance": []}
        # Show the top n matches to the user
        for i in range(len(indices[0])):
            index = indices[0][i]
            distance = distances[0][i]
            predictions["rank"].append(i)
            predictions["species"].append(lab[1]['plant'][index])
            predictions["distance"].append(distance)
            # print(f"Match {i} Species: {lab[1]['plant'][index]} Distance: {distance}")

        species_counter = Counter(predictions["species"])
        sorted_species = sorted(species_counter, key = species_counter.get, reverse=True)

        ranking = []
        for idx,species in enumerate(sorted_species, start=1):
            ranking.append({"total_rank": idx, "species" : species})

        return {"message" : 'success', "features" : ranking}


def main():
    trained = train.main()
    # Get the dataset
    global lab
    lab = trained[0]
    # Get the model
    global nbrs
    nbrs = trained[1]
    print(f"Model: {nbrs}")

    app.run(host="192.168.100.194", port = 8081, debug=True)


if __name__ == '__main__':
    print("-=-=-=-=-=-=-=-=-=-=-=-=-")
    print("Initiating Server...")
    print("-=-=-=-=-=-=-=-=-=-=-=-=-")
    main()