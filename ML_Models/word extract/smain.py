from PIL import Image
import pytesseract

# Path to the Tesseract executable (adjust as needed for your system)
pytesseract.pytesseract.tesseract_cmd = r'/opt/homebrew/bin/tesseract'

def extract_text_from_image(image_path):
    # Open an image file
    img = Image.open('images/11.jpeg')
    
    # Use pytesseract to do OCR on the image
    extracted_text = pytesseract.image_to_string(img)
    
    return extracted_text

if __name__ == "__main__":
    # Example usage
    image_path = 'example.png'  # Replace with your image file path
    extracted_text = extract_text_from_image(image_path)
    print(extracted_text)
