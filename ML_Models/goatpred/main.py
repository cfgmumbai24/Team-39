# Importing necessary libraries and packages
from mpl_toolkits.mplot3d import Axes3D
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
from tkinter import *
import numpy as np
import pandas as pd
import os

# List of all symptoms
l1=['anorexia','abdominal_pain','anaemia','abortions','acetone','aggression','arthrogyposis',
    'ankylosis','anxiety','bellowing','blood_loss','blood_poisoning','blisters','colic','Condemnation_of_livers',
    'coughing','depression','discomfort','dyspnea','dysentery','diarrhoea','dehydration','drooling',
    'dull','decreased_fertility','diffculty_breath','emaciation','encephalitis','fever','facial_paralysis','frothing_of_mouth',
    'frothing','gaseous_stomach','highly_diarrhoea','high_pulse_rate','high_temp','high_proportion','hyperaemia','hydrocephalus',
    'isolation_from_herd','infertility','intermittent_fever','jaundice','ketosis','loss_of_appetite','lameness',
    'lack_of-coordination','lethargy','lacrimation','milk_flakes','milk_watery','milk_clots',
    'mild_diarrhoea','moaning','mucosal_lesions','milk_fever','nausea','nasel_discharges','oedema',
    'pain','painful_tongue','pneumonia','photo_sensitization','quivering_lips','reduction_milk_vields','rapid_breathing',
    'rumenstasis','reduced_rumination','reduced_fertility','reduced_fat','reduces_feed_intake','raised_breathing','stomach_pain',
    'salivation','stillbirths','shallow_breathing','swollen_pharyngeal','swelling','saliva','swollen_tongue',
    'tachycardia','torticollis','udder_swelling','udder_heat','udder_hardeness','udder_redness','udder_pain','unwillingness_to_move',
    'ulcers','vomiting','weight_loss','weakness']

# List of diseases
disease=['mastitis','blackleg','bloat','coccidiosis','cryptosporidiosis',
        'displaced_abomasum','gut_worms','listeriosis','liver_fluke','necrotic_enteritis','peri_weaning_diarrhoea',
        'rift_valley_fever','rumen_acidosis',
        'traumatic_reticulitis','calf_diphtheria','foot_rot','foot_and_mouth','ragwort_poisoning','wooden_tongue','infectious_bovine_rhinotracheitis',
        'acetonaemia','fatty_liver_syndrome','calf_pneumonia','schmallen_berg_virus','trypanosomosis','fog_fever']

# Initialize a list to store symptom presence (binary)
l2 = [0] * len(l1)

# Reading the training dataset
df = pd.read_csv("Training.csv")

# Replace disease names with numeric labels in the training dataset
df.replace({'prognosis': {'mastitis': 0,'blackleg': 1,'bloat': 2,'coccidiosis': 3,'cryptosporidiosis': 4,
                          'displaced_abomasum': 5,'gut_worms': 6,'listeriosis': 7,'liver_fluke': 8,'necrotic_enteritis': 9,'peri_weaning_diarrhoea': 10,
                          'rift_valley_fever': 11,'rumen_acidosis': 12,'traumatic_reticulitis': 13,'calf_diphtheria': 14,'foot_rot': 15,
                          'foot_and_mouth': 16,'ragwort_poisoning': 17,'wooden_tongue': 18,'infectious_bovine_rhinotracheitis': 19,
                          'acetonaemia': 20,'fatty_liver_syndrome': 21,'calf_pneumonia': 22,'schmallen_berg_virus': 23,'trypanosomosis': 24,
                          'fog_fever': 25}}, inplace=True)

# Function to plot distribution of columns
def plotPerColumnDistribution(df1, nGraphShown, nGraphPerRow):
    nunique = df1.nunique()
    df1 = df1[[col for col in df if nunique[col] > 1 and nunique[col] < 50]]
    nRow, nCol = df1.shape
    columnNames = list(df1)
    nGraphRow = (nCol + nGraphPerRow - 1) // nGraphPerRow
    plt.figure(figsize=(6 * nGraphPerRow, 8 * nGraphRow), dpi=80, facecolor='w', edgecolor='k')
    for i in range(min(nCol, nGraphShown)):
        plt.subplot(nGraphRow, nGraphPerRow, i + 1)
        columnDf = df.iloc[:, i]
        if not np.issubdtype(type(columnDf.iloc[0]), np.number):
            valueCounts = columnDf.value_counts()
            valueCounts.plot.bar()
        else:
            columnDf.hist()
        plt.ylabel('counts')
        plt.xticks(rotation=90)
        plt.title(f'{columnNames[i]} (column {i})')
    plt.tight_layout(pad=1.0, w_pad=1.0, h_pad=1.0)
    plt.show()

# Function to plot scatter and density plots
def plotScatterMatrix(df1, plotSize, textSize):
    df1 = df1.select_dtypes(include=[np.number])
    df1 = df1.dropna('columns')
    df1 = df1[[col for col in df if df[col].nunique() > 1]]
    columnNames = list(df)
    if len(columnNames) > 10:
        columnNames = columnNames[:10]
    df1 = df1[columnNames]
    ax = pd.plotting.scatter_matrix(df1, alpha=0.75, figsize=[plotSize, plotSize], diagonal='kde')
    corrs = df1.corr().values
    for i, j in zip(*plt.np.triu_indices_from(ax, k=1)):
        ax[i, j].annotate('Corr. coef = %.3f' % corrs[i, j], (0.8, 0.2), xycoords='axes fraction', ha='center', va='center', size=textSize)
    plt.suptitle('Scatter and Density Plot')
    plt.show()

# Function to create scatter plot of symptoms
def scatterplt(disease):
    x = (DF.loc[disease]).sum()
    x.drop(x[x==0].index, inplace=True)
    y = x.keys()
    plt.title(disease)
    plt.scatter(y, x.values)
    plt.show()

# Function to create scatter plot of user input symptoms
def scatterinp(sym1, sym2, sym3, sym4, sym5):
    x = [sym1, sym2, sym3, sym4, sym5]
    y = [0, 0, 0, 0, 0]
    if sym1 != 'Select Here':
        y[0] = 1
    if sym2 != 'Select Here':
        y[1] = 1
    if sym3 != 'Select Here':
        y[2] = 1
    if sym4 != 'Select Here':
        y[3] = 1
    if sym5 != 'Select Here':
        y[4] = 1
    plt.scatter(x, y)
    plt.show()

# Function to train and predict using Decision Tree algorithm
def DecisionTree():
    if len(NameEn.get()) == 0:
        pred1.set(" ")
        comp = messagebox.askokcancel("System", "Kindly Fill the Name")
        if comp:
            root.mainloop()
    elif (Symptom1.get() == "Select Here") or (Symptom2.get() == "Select Here"):
        pred1.set(" ")
        sym = messagebox.askokcancel("System", "Kindly Fill at least first two Symptoms")
        if sym:
            root.mainloop()
    else:
        from sklearn import tree
        clf3 = tree.DecisionTreeClassifier() 
        clf3 = clf3.fit(X, y)

        from sklearn.metrics import accuracy_score, confusion_matrix
        y_pred = clf3.predict(X_test)
        print("Decision Tree")
        print("Accuracy")
        print(accuracy_score(y_test, y_pred))
        print("Confusion matrix")
        print(confusion_matrix(y_test, y_pred))

        psymptoms = [Symptom1.get(), Symptom2.get(), Symptom3.get(), Symptom4.get(), Symptom5.get()]
        for k in range(len(l1)):
            for z in psymptoms:
                if(z == l1[k]):
                    l2[k] = 1
        inputtest = [l2]
        predict = clf3.predict(inputtest)
        predicted=predict[0]

        h='no'
        for a in range(len(disease)):
            if(predicted == a):
                h='yes'
                break

        if (h=='yes'):
            pred1.set(" ")
            pred1.set(disease[a])
        else:
            pred1.set(" ")
            pred1.set("Not Found")

        accur = str(accuracy_score(y_test, y_pred) * 100)
        accur = accur[0:5]
        ts = 'Accuracy of: '+accur + " %"
        pred2.set(ts)

        scatterplt(disease[a])
        scatterinp(Symptom1.get(), Symptom2.get(), Symptom3.get(), Symptom4.get(), Symptom5.get())

# Function to train and predict using Random Forest algorithm
def RandomForest():
    if len(NameEn.get()) == 0:
        pred1.set(" ")
        comp = messagebox.askokcancel("System", "Kindly Fill the Name")
        if comp:
            root.mainloop()
    elif (Symptom1.get() == "Select Here") or (Symptom2.get() == "Select Here"):
        pred1.set(" ")
        sym = messagebox.askokcancel("System", "Kindly Fill at least first two Symptoms")
        if sym:
            root.mainloop()
    else:
        from sklearn.ensemble import RandomForestClassifier
        clf4 = RandomForestClassifier()
        clf4 = clf4.fit(X, y)

        from sklearn.metrics import accuracy_score, confusion_matrix
        y_pred = clf4.predict(X_test)
        print("Random Forest")
        print("Accuracy")
        print(accuracy_score(y_test, y_pred))
        print("Confusion matrix")
        print(confusion_matrix(y_test, y_pred))

        psymptoms = [Symptom1.get(), Symptom2.get(), Symptom3.get(), Symptom4.get(), Symptom5.get()]
        for k in range(len(l1)):
            for z in psymptoms:
                if(z == l1[k]):
                    l2[k] = 1
        inputtest = [l2]
        predict = clf4.predict(inputtest)
        predicted=predict[0]

        h='no'
        for a in range(len(disease)):
            if(predicted == a):
                h='yes'
                break

        if (h=='yes'):
            pred1.set(" ")
            pred1.set(disease[a])
        else:
            pred1.set(" ")
            pred1.set("Not Found")

        accur = str(accuracy_score(y_test, y_pred) * 100)
        accur = accur[0:5]
        ts = 'Accuracy of: '+accur + " %"
        pred2.set(ts)

        scatterplt(disease[a])
        scatterinp(Symptom1.get(), Symptom2.get(), Symptom3.get(), Symptom4.get(), Symptom5.get())

# Function to train and predict using K-Nearest Neighbors algorithm
def KNN():
    if len(NameEn.get()) == 0:
        pred1.set(" ")
        comp = messagebox.askokcancel("System", "Kindly Fill the Name")
        if comp:
            root.mainloop()
    elif (Symptom1.get() == "Select Here") or (Symptom2.get() == "Select Here"):
        pred1.set(" ")
        sym = messagebox.askokcancel("System", "Kindly Fill at least first two Symptoms")
        if sym:
            root.mainloop()
    else:
        from sklearn.neighbors import KNeighborsClassifier
        knn = KNeighborsClassifier(n_neighbors=3)
        knn = knn.fit(X, y)

        from sklearn.metrics import accuracy_score, confusion_matrix
        y_pred = knn.predict(X_test)
        print("K-Nearest Neighbors")
        print("Accuracy")
        print(accuracy_score(y_test, y_pred))
        print("Confusion matrix")
        print(confusion_matrix(y_test, y_pred))

        psymptoms = [Symptom1.get(), Symptom2.get(), Symptom3.get(), Symptom4.get(), Symptom5.get()]
        for k in range(len(l1)):
            for z in psymptoms:
                if(z == l1[k]):
                    l2[k] = 1
        inputtest = [l2]
        predict = knn.predict(inputtest)
        predicted=predict[0]

        h='no'
        for a in range(len(disease)):
            if(predicted == a):
                h='yes'
                break

        if (h=='yes'):
            pred1.set(" ")
            pred1.set(disease[a])
        else:
            pred1.set(" ")
            pred1.set("Not Found")

        accur = str(accuracy_score(y_test, y_pred) * 100)
        accur = accur[0:5]
        ts = 'Accuracy of: '+accur + " %"
        pred2.set(ts)

        scatterplt(disease[a])
        scatterinp(Symptom1.get(), Symptom2.get(), Symptom3.get(), Symptom4.get(), Symptom5.get())

# Function to train and predict using Naive Bayes algorithm
def NaiveBayes():
    if len(NameEn.get()) == 0:
        pred1.set(" ")
        comp = messagebox.askokcancel("System", "Kindly Fill the Name")
        if comp:
            root.mainloop()
    elif (Symptom1.get() == "Select Here") or (Symptom2.get() == "Select Here"):
        pred1.set(" ")
        sym = messagebox.askokcancel("System", "Kindly Fill at least first two Symptoms")
        if sym:
            root.mainloop()
    else:
        from sklearn.naive_bayes import GaussianNB
        gnb = GaussianNB()
        gnb = gnb.fit(X, y)

        from sklearn.metrics import accuracy_score, confusion_matrix
        y_pred = gnb.predict(X_test)
        print("Naive Bayes")
        print("Accuracy")
        print(accuracy_score(y_test, y_pred))
        print("Confusion matrix")
        print(confusion_matrix(y_test, y_pred))

        psymptoms = [Symptom1.get(), Symptom2.get(), Symptom3.get(), Symptom4.get(), Symptom5.get()]
        for k in range(len(l1)):
            for z in psymptoms:
                if(z == l1[k]):
                    l2[k] = 1
        inputtest = [l2]
        predict = gnb.predict(inputtest)
        predicted=predict[0]

        h='no'
        for a in range(len(disease)):
            if(predicted == a):
                h='yes'
                break

        if (h=='yes'):
            pred1.set(" ")
            pred1.set(disease[a])
        else:
            pred1.set(" ")
            pred1.set("Not Found")

        accur = str(accuracy_score(y_test, y_pred) * 100)
        accur = accur[0:5]
        ts = 'Accuracy of: '+accur + " %"
        pred2.set(ts)

        scatterplt(disease[a])
        scatterinp(Symptom1.get(), Symptom2.get(), Symptom3.get(), Symptom4.get(), Symptom5.get())

# Creating Main Window of tkinter
root = Tk()
root.title("Cattle Disease Prediction System")

# GUI Elements
Name = Label(root, text="Enter Name")
Name.grid(row=0, column=0)
NameEn = Entry(root)
NameEn.grid(row=0, column=1)

S1 = Label(root, text="Select Symptom 1")
S1.grid(row=1, column=0)
Symptom1 = StringVar(root)
Symptom1.set("Select Here")

S1om = OptionMenu(root, Symptom1, *l1)
S1om.grid(row=1, column=1)

S2 = Label(root, text="Select Symptom 2")
S2.grid(row=2, column=0)
Symptom2 = StringVar(root)
Symptom2.set("Select Here")

S2om = OptionMenu(root, Symptom2, *l1)
S2om.grid(row=2, column=1)

S3 = Label(root, text="Select Symptom 3")
S3.grid(row=3, column=0)
Symptom3 = StringVar(root)
Symptom3.set("Select Here")

S3om = OptionMenu(root, Symptom3, *l1)
S3om.grid(row=3, column=1)

S4 = Label(root, text="Select Symptom 4")
S4.grid(row=4, column=0)
Symptom4 = StringVar(root)
Symptom4.set("Select Here")

S4om = OptionMenu(root, Symptom4, *l1)
S4om.grid(row=4, column=1)

S5 = Label(root, text="Select Symptom 5")
S5.grid(row=5, column=0)
Symptom5 = StringVar(root)
Symptom5.set("Select Here")

S5om = OptionMenu(root, Symptom5, *l1)
S5om.grid(row=5, column=1)

lr = Button(root, text="View Scatter plot", bg="red", fg="white", command=DecisionTree)
lr.grid(row=7, column=1)

dt = Button(root, text="DecisionTree", bg="red", fg="white", command=DecisionTree)
dt.grid(row=7, column=2)

kn = Button(root, text="K-Nearest Neighbour", bg="green", fg="white", command=KNN)
kn.grid(row=7, column=3)

nb = Button(root, text="NaiveBayes", bg="blue", fg="white", command=NaiveBayes)
nb.grid(row=7, column=4)

rf = Button(root, text="RandomForest", bg="green", fg="white", command=RandomForest)
rf.grid(row=7, column=5)

pred1 = StringVar()
pred2 = StringVar()

t1 = Label(root, text="Prediction", height=2, textvariable=pred1, bg="red", fg="white")
t1.grid(row=8, column=2)

t2 = Label(root, text="Accuracy", height=2, textvariable=pred2, bg="red", fg="white")
t2.grid(row=9, column=2)

# Creating lists to store data and target labels
X = df[l1]
y = df[["prognosis"]]

# Splitting dataset into training and testing sets
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)

# Main loop to run the application
root.mainloop()
