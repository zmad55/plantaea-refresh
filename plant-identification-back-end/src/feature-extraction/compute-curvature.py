import cv2
import numpy as np
import scipy.integrate
from scipy.integrate import cumtrapz


def count_pos(arr):
  count = 0
  for num in arr:
    if num > 0:
        count += 1

  print("Number of positive elements in the array:", count)


def to_curv_image(currvature_arr, i, y):
    # Define image size and resolution
    img_width = 250
    img_height = 250

    # Create blank image
    curvature_img = np.zeros((img_height, img_width), np.uint8)

    # Define curvature array (example values)
    curvature_data = currvature_arr[i][y]

    # Map curvature values to pixel intensities
    max_curvature = np.max(np.abs(curvature_data))
    curvature_img = (np.abs(curvature_data) / max_curvature) * 255

    # Apply smoothing (optional)

    curvature_img = cv2.GaussianBlur(curvature_img, (5, 5), 0)
    return curvature_img


def to_hist(curvature_img):
    # Define histogram parameters
    hist_size = 21  # number of bins
    hist_range = (0, 256)  # range of values to use for the histogram
    curvature_img = np.uint8(curvature_img)
    # Calculate histogram
    histogram = cv2.calcHist([curvature_img], [0], None, [
                             hist_size], hist_range)
    return histogram


def curvature(x, y, xc, yc, r):
    # Shift coordinates to make the center of the circle the origin
    x_shifted = x - xc
    y_shifted = y - yc
    # Calculate distance from each point to the center of the circle
    d = np.sqrt(x_shifted**2 + y_shifted**2)
    # Calculate the curvature only for points inside the circle
    inside_circle = d <= r
    dx_dt = np.gradient(x[inside_circle])
    dy_dt = np.gradient(y[inside_circle])
    d2x_dt2 = np.gradient(dx_dt)
    d2y_dt2 = np.gradient(dy_dt)
    denominator = dx_dt**2 + dy_dt**2
    curvature = np.zeros_like(denominator)
    nonzero_denominator = denominator != 0
    curvature[nonzero_denominator] = (dx_dt[nonzero_denominator] * d2y_dt2[nonzero_denominator] -
                                      d2x_dt2[nonzero_denominator] * dy_dt[nonzero_denominator]) / denominator[nonzero_denominator]**(3/2)
    # Pad the curvature array with zeros for the points outside the circle
    curvature_padded = np.zeros_like(d)
    curvature_padded[inside_circle] = curvature
    return curvature_padded


def integral_curvature(x, y, xc, yc, r):
    k = curvature(x, y, xc, yc, r)
    return cumtrapz(k, initial=0)


def get_integral_curvature(i, x, y, r, memo):
    # Check if the result has already been computed
    if (i, r) in memo:
        return memo[(i, r)]
    # Compute the integral curvature for a circle centered at (x[i], y[i]) with radius r
    int_curv = integral_curvature(x, y, x[i], y[i], r)[-1]
    # Memoize the result
    memo[(i, r)] = int_curv
    return abs(int_curv)


def get_area_measure(contour, i, radius, thresh, prev_center, prev_mask):
    # Compute current circle center and mask
    center = (contour[i][0][0], contour[i][0][1])
    circle_mask = np.zeros_like(gray)
    cv2.circle(circle_mask, center, radius, (255, 255, 255), -1)

    # Compute mask difference to find changed pixels
    diff_mask = cv2.absdiff(circle_mask, prev_mask)
    changed_pixels = np.where(diff_mask > 0)

    # Compute intersection area using only changed pixels
    intersection_mask = cv2.bitwise_and(circle_mask, thresh)
    changed_intersection_mask = intersection_mask[changed_pixels]
    intersection_area = np.sum(changed_intersection_mask) / 255

    # Update previous center and mask
    prev_center = center
    prev_mask = circle_mask

    # Compute area fraction
    circle_area = np.pi * radius ** 2
    intersection_fraction = intersection_area / circle_area

    # Return area fraction
    return intersection_fraction


def get_curvatures(contours, radius_arr, thresh):
    curvature_arr = []
    # Loop over each contour
    for contour in contours:
        curr_1 = []
        curr_2 = []

        # Precompute the coordinates of all points in the contour
        x, y = contour[:, 0, 0], contour[:, 0, 1]
        min_x, max_x = np.min(x), np.max(x)
        min_y, max_y = np.min(y), np.max(y)
        mask = np.zeros_like(gray)
        cv2.drawContours(mask, [contour], 0, (255, 255, 255), -1)
        thresh = cv2.bitwise_and(gray, mask)
        # Compute the area measure for each point in the contour
        memo = {}
        for radius in radius_arr:
            prev_center = contour[0][0]
            prev_mask = np.zeros_like(gray)
            circle_perimeters = []
            curr_area_arr = []
            curr_int_arr = []
            for i in range(len(contour)):
                curr_area = get_area_measure(
                    contour, i, radius, thresh, prev_center, prev_mask)
                curr_int = get_integral_curvature(i, x, y, radius, memo)
                curr_int_arr.append(curr_int)
                curr_area_arr.append(curr_area)
            curr_1.append(curr_int_arr)
            curr_2.append(curr_area_arr)
        curvature_arr.append(curr_1)
        curvature_arr.append(curr_2)

    return curvature_arr


def get_int_histogram_values():
    img, path, filename = pcv.readimage(filename="../../../../others/images/field/ulmus_rubra/13002228280378.jpg")
    pcv_contour = preprocess_image(path+'/'+filename)

    radius_arr = np.arange(10, 131, 5)

    thresh = pcv_contour[1]
    image = pcv_contour[2]

    # Find the contours in the image
    contours, hierarchy = cv2.findContours(thresh,  cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Create a blank image for drawing contours
    contour_image = np.zeros_like(image)
    # Convert the contour image to grayscale
    contour_gray = cv2.cvtColor(contour_image, cv2.COLOR_BGR2GRAY)
    # Draw the contours on the contour image
    cv2.drawContours(contour_image, contours, -1, (255, 255, 255), -1)
    # Convert the contour image to grayscale
    gray = cv2.cvtColor(contour_image, cv2.COLOR_BGR2GRAY)

    start_time = time.time()

    currvature_arr = get_curvatures(contours, radius_arr, thresh)

    int_hist = []
    area_hist = []

    for y in range(len(currvature_arr[0])):
        curv_image_hist = to_curv_image(currvature_arr, 0, y)
        curv_image_area = to_curv_image(currvature_arr, 1, y)
        histogram_hist_int = to_hist(curv_image_hist)
        histogram_hist_area = to_hist(curv_image_area)

        int_hist.append(histogram_hist_int)
        area_hist.append(histogram_hist_area)

    flat_hist_int = np.array(int_hist).flatten()
    flat_hist_area = np.array(area_hist).flatten()

    print(flat_hist_int)
    print(flat_hist_area)