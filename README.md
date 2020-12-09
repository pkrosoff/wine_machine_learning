# wine_machine_learning

Group Members: Kelly Shull, Jarrod Williams, Phoebe Rosoff, and Justan Plumlee

Tools: Matplotlib, Pandas, HTML/CSS/Bootstrap, JavaScript Plotly

Using the wine magazine review data predict price and class based on words in the review.

https://www.kaggle.com/zynicide/wine-reviews?select=winemag-data_first150k.csv

Use wine quality dataset for regression analysis on to predict quality based on chemical makeup.

https://archive.ics.uci.edu/ml/datasets/wine+quality

Questions:

-	Can wine score be predicted by review length/content?
-	Can wine type (red or white) be predicted based on chemical makeup?
-	Can wine price be predicted by review length/content, country, “province”, or variety?

<<<<<<< HEAD
=======

>>>>>>> 82f3bc198cdb451810aee34531f5639a8dff777a
<br><br>
What to accomplish today:<br>
<br>
Answer the following to tell the story of your machine learning model:<br>
<br>
Which model type are you using?<br>
<<<<<<< HEAD
Random Forest Model<br>
Which dataset are you using?<br>
Two datasets appended, the red and white wine quality data from UCI<br>
Which platform are you using to analyze the data? jupyter vs colab vs ..<br>
Jupyter Notebook <br>
How/did you clean the data or prepare the data?<br>
I imported both csvs, added a column for color and marked red wines as 1 and white wines as 0<br>
How did you fit the model to the data.<br>
I defined the targer feature (color of wine) and then dropped color from the dataset. I ran a train test split function using the data without the color classification to test on, and the data that included the target which I used to trsin the model. I used the DecisionTreeCLassifier() and fit the training dataset to the model (10% of the data), then checked the score of the test dataset. I then used a RandomForestCLassifier() function to fit the train and test data into using 100 estimators. I printed out each feature and its relative importance in the model. I plotted the relative importances on a horizontal bar chart.<br>
Which features were you looking at specifically in relation to which other features (if applicable)?<br>
I was looking at the relative importance of each feature in determining the color of the wine.<br>
How did the model perform?<br>
The model performed very well becuase there were a lot of features, and two of them had high relative importance.<br>
=======
Which dataset are you using?<br>
Which platform are you using to analyze the data? jupyter vs colab vs ..<br>
How/did you clean the data or prepare the data?<br>
How did you fit the model to the data.<br>
Which features were you looking at specifically in relation ot which other features (if applicable)?<br>
How did the model perform?<br>
>>>>>>> 82f3bc198cdb451810aee34531f5639a8dff777a
    When applicable identify the following:<br><ol>
   <li> Model accuracy in predicting or classifying target</li>
   <li> Model precision </li>
    <li> r2 score</li>
    <li> f1 score </li>
    <li> auc and roc </li>
    <li> MAE, MSE, etc</li></ol><br>
Did you cross validate your model?<br>
Did you use hyperparameter optimization?<br>
<br><br>
How do we want our results to look? Meaning: Which metrics are important to identify and display, which visuals?<br><br>
Comment your code, and make it concise when possible!.<br>
<br><br>
What were some issues with your model, platform, data that you would like to improve?<br>
What would you look into next given all the time and knowledge in the world?<br>
<<<<<<< HEAD



=======
>>>>>>> 82f3bc198cdb451810aee34531f5639a8dff777a
