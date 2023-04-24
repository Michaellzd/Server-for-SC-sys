

# pytorch libraries
import torch
import torchvision
from PIL import Image
from torch import optim, nn, classes
from torch.autograd import Variable
from torch.utils.data import DataLoader, Dataset
from torchvision import models, transforms
import time
from fvcore.nn import FlopCountAnalysis


classes = ['actinic keratoses', 'basal cell carcinoma', 'benign keratosis-like lesions',
           'dermatofibroma', 'melanoma', 'melanocytic nevi', 'vascular lesions']


transform_test = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010)),
])


device = torch.device('cpu')

# 加载模型
effnet = torch.load('effnet.pkl', map_location='cpu')
resnet50 = torch.load('resnet_50.pkl', map_location='cpu')

# 将模型移至 CPU
effnet = effnet.to(device)
resnet50 = resnet50.to(device)

# 设置为评估模式
effnet.eval()
resnet50.eval()




def predict(image: Image):
    time_start = time.time()


    # Replace this part
    # img = Image.open(path)
    img = image

    ##plt.figure("SKin cancer")
    #plt.imshow(img)
    #plt.show()
    img = transform_test(img).unsqueeze(0)
    img_ = img.to(device)
    outputs_effnet = effnet(img_)
    outputs_resnet50 = resnet50(img_)

    # 对预测概率进行平均
    outputs = (outputs_effnet + outputs_resnet50) / 2

    # probs
    probs = torch.nn.functional.softmax(outputs, dim=1)
    conf, a = torch.max(probs, 1)
    conf = conf.item()
    conf = round(conf, 3)
    conf = str(conf)

    flops = FlopCountAnalysis(effnet, img_)
    ft = flops.total()
    ft = round(ft, 2)
    flops2=FlopCountAnalysis(resnet50, img_)
    ft2 = flops2.total()
    ft2 = round(ft2, 2)

    ft_total=ft+ft2
    ft_total=ft_total/1000000000.0
    ft_total=round(ft_total, 2)

    _, predicted = torch.max(outputs, 1)

    # print(predicted)
    print('this picture maybe :', classes[predicted[0]])
    time_end = time.time()
    tf = time_end - time_start
    return classes[predicted[0]], tf, ft_total, conf