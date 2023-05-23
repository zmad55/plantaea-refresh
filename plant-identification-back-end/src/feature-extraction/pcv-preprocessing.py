import cv2
from plantcv import plantcv as pcv


class options:
    def __init__(self):
        self.debug = "none"
        self.writeimg= 'False' 
        self.result = "features_metadata.json"
        self.outdir = ""


def resizeImage(img_path, new_width):
    # Load the image
    img = cv2.imread(img_path)
    # Get the image dimensions
    height, width = img.shape[:2]
    # Calculate the aspect ratio
    ratio = float(new_width) / width
    # Calculate the new height
    new_height = int(height * ratio)
    # Resize the image
    resized_img = cv2.resize(img, (new_width, new_height),
                             interpolation=cv2.INTER_AREA)
    return resized_img


def preprocess_image(image_path):
    # img, path, filename = pcv.readimage(filename=image_path)
    img = resizeImage(image_path, 300)
    # Convert RGB to HSV and extract the saturation channel
    s = pcv.rgb2gray_hsv(rgb_img=img, channel='s')
    # Threshold the saturation image
    s_thresh = pcv.threshold.binary(gray_img=s, threshold=85, max_value=255, object_type='light')
    # Median Blur
    s_mblur = pcv.median_blur(gray_img=s_thresh, ksize=5)
    s_cnt = pcv.median_blur(gray_img=s_thresh, ksize=5)
    # Convert RGB to LAB and extract the Blue channel
    #b = pcv.rgb2gray_lab(gray_img=img, channel='b')
    b = pcv.rgb2gray_lab(rgb_img=img, channel='b')
    # Threshold the blue image
    b_thresh = pcv.threshold.binary(gray_img=b, threshold=160, max_value=255, object_type='light')
    b_cnt = pcv.threshold.binary(gray_img=b, threshold=160, max_value=255, object_type='light')
    # Join the thresholded saturation and blue-yellow images
    bs = pcv.logical_or(bin_img1=s_mblur, bin_img2=b_cnt)
    # Apply Mask (for VIS images, mask_color=white)
    #masked = pcv.apply_mask(rgb_img=img, mask=bs, mask_color='white')
    masked = pcv.apply_mask(img=img, mask=bs, mask_color='white')
    # Convert RGB to LAB and extract the Green-Magenta and Blue-Yellow channels
    masked_a = pcv.rgb2gray_lab(rgb_img=masked, channel='a')
    masked_b = pcv.rgb2gray_lab(rgb_img=masked, channel='b')
    # Threshold the green-magenta and blue images
    maskeda_thresh = pcv.threshold.binary(gray_img=masked_a, threshold=115, max_value=255, object_type='dark')
    maskeda_thresh1 = pcv.threshold.binary(gray_img=masked_a, threshold=135, max_value=255, object_type='light')
    maskedb_thresh = pcv.threshold.binary(gray_img=masked_b, threshold=128, max_value=255, object_type='light')
    # Join the thresholded saturation and blue-yellow images (OR)
    ab1 = pcv.logical_or(bin_img1=maskeda_thresh, bin_img2=maskedb_thresh)
    ab = pcv.logical_or(bin_img1=maskeda_thresh1, bin_img2=ab1)
    # Fill small objects
    ab_fill = pcv.fill(bin_img=ab, size=200)
    fill_image = pcv.fill_holes(bin_img=ab)
    # Apply mask (for VIS images, mask_color=white)
    #masked2 = pcv.apply_mask(rgb_img=masked, mask=ab_fill, mask_color='white')
    masked2 = pcv.apply_mask(img=masked, mask=fill_image, mask_color='white')
    skeleton = pcv.morphology.skeletonize(mask=masked2)
    # Identify objects
    id_objects, obj_hierarchy = pcv.find_objects(img=img, mask=fill_image)

    # get dimensions of image
    dimensions = img.shape
    # height, width, number of channels in image
    height = img.shape[0] - (img.shape[0] * (30 / 100))
    width = img.shape[1] - (img.shape[1] * (30 / 100))

    # Define ROI
    # roi1, roi_hierarchy= pcv.roi.circle(img=masked2, x=50, y=50, h=height, w=width)
    roi1, roi_hierarchy= pcv.roi.circle(img=masked2, x=100, y=100, r=35)
    # Decide which objects to keep
    roi_objects, hierarchy3, kept_mask, obj_area = pcv.roi_objects(img=img, roi_contour=roi1, 
                                                                roi_hierarchy=roi_hierarchy, 
                                                                object_contour=id_objects, 
                                                                obj_hierarchy=obj_hierarchy,
                                                                roi_type='partial')
                                                                
    # Object combine kept objects
    obj, mask = pcv.object_composition(img=img, contours=roi_objects, hierarchy=hierarchy3)

    # Return contours, thresh/binary, gray
    return [obj, kept_mask, img]


if __name__ == "__main__":
    # Get options
    args = options()
    # Set debug to the global parameter 
    pcv.params.debug = args.debug
    pcv.params.debug = args.debug

    param = sys.argv[1]
    # result = bn_navigate_scrape_website(param)