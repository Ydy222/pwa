from PIL import Image
import torch
from torchvision import transforms
from app.model.model_def import FoodCNN

classes = ['bibimbap', 'bulgogi', 'ramen', 'sushi', 'fried rice']

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

def load_model():
    model = FoodCNN(num_classes=len(classes))
    model.load_state_dict(torch.load("app/model/model.pth", map_location="cpu"))
    model.eval()
    return model

def predict_image(image: Image.Image, model):
    img_tensor = transform(image).unsqueeze(0)  # (1, 3, 224, 224)
    with torch.no_grad():
        outputs = model(img_tensor)
        probs = torch.softmax(outputs, dim=1)
        conf, pred = torch.max(probs, 1)
    return classes[pred.item()], round(conf.item(), 4)
