import pandas as pd
import numpy as np
import ast

from sklearn.neighbors import NearestNeighbors
import numpy as np


def prepare_data(path):
    print("Preparing data...\nPath: " + path)
    data = pd.read_csv(path)
    data = data.reset_index(drop=True)

    '''
    Clean data:
    1. Remove unnecessary dots
    2. Transform into array
    3. Compile to single dataframe
    '''
    lab_int = [ast.literal_eval(d) for d in data['int_hist_values']]
    lab = pd.DataFrame({'int_hist_values' : lab_int, 'plant' : data['plant']})

    print("Data is ready...")

    return [lab_int, lab]


def nn_train(training_list):
    print("Training...")
    nbrs = NearestNeighbors(n_neighbors=15, algorithm='brute', metric='cosine').fit(training_list)
    print("Model is ready...")
    return nbrs


def main():
    data = prepare_data("../csv/training_data.csv")
    nbrs = nn_train(data[0]) # Use single list
    return [data, nbrs]


if __name__ == "__main__":
    nbrs = main()
    
