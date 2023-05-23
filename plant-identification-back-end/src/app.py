from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_cors import cross_origin
from initiate_lda import initiate_topic_modelling

app = Flask(__name__)

@app.route("/api/hello")
def handle_form_submission():
    # checkbox1 = request.form.get("checkbox1")
    # checkbox2 = request.form.get("checkbox2")
    # checkbox3 = request.form.get("checkbox3")
    # Do something with the form data here...
    return {"message": ["??", "???"]}


@app.route("/api/retrieve_topics", methods=["POST"])
@cross_origin()
def handle_retrieve_topics():
    return None
    

@app.route('/api/identify-plant', methods=['POST'])
def process_image():
    # Get the image data from the request payload
    image_data = request.json.get('image')

    # Perform processing on the image (e.g., decode from base64, process using image libraries)
    # ...

    # Return the processed image or any relevant response
    return 'Image processed successfully'


if __name__ == "__main__":
    app.run(port = 5000)