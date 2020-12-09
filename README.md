# wine_machine_learning
<h4>Project Proposal</h4>
<br>
Group Members: Kelly Shull, Jarrod Williams, Phoebe Rosoff, and Justan Plumlee

Tools: Matplotlib, Pandas, HTML/CSS/Bootstrap, JavaScript Plotly, Google Colab

Use the wine magazine review data to predict price and class based on words in the review.

https://www.kaggle.com/zynicide/wine-reviews?select=winemag-data_first150k.csv

Use wine quality dataset for regression analysis to classify wine type (red or white) based on chemical makeup.

https://archive.ics.uci.edu/ml/datasets/wine+quality

Questions we would like to answer:

-	Can wine score be predicted by review length/content?
-	Can wine type (red or white) be predicted based on chemical makeup?
-	Can wine price be predicted by review length/content, country, “province”, or variety?
<br><br>
<h4>Logistic Regression</h4>
<br>
Using data from UCI's wine dataset analyzing the chemical breakdown of wines from Portugal's Vinho Verde region, we set out to design a model that could predict wine type (white or red) based on chemical analyses. 
The regression model was able to predict with 88% accuracy if a wine would be classified as red or white.
Using cross-validation and hyperparameter optimization methods, we were able to improve the model to 93% accuracy.
The AUC of the model was 0.95.
<br>
<h4>Random Forest</h4>
We used a random forest classifier to identify relative feature importance in classifying whether a wine was red or white. We looked at the differences in frequency of data for a couple of the more relatively important features such as total sulfur dioxide and chlorides. The model was very accurate possibly due to the large amount of features, and the relative difference in chemical makeup between the red and white wines of this variety.
<br>
<h4>Natural Language Processing</h4>
Using over 130,000 rows of data from the wine enthusiast Winemag.com reviews via kaggl.com, we evaluated if a model could predict the wine's score and which price range it fell into based on review length. After cleaning and fitting the data, and training the models, The wine score model came out with an accuracy of about 36%. The price range model was evaluated with varying sizes of price bins, and four out of the five bin sizes predicted price with over 70% accuracy.
