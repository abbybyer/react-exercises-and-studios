import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.spendwithpennies.com/easy-white-sangria/#wprm-recipe-container-137161";
    let authorPhoto = "https://secure.gravatar.com/avatar/fa4bdeb9d2aa6450536af2064fac2481?s=64&r=g";
    let authorName = "Queen Holly";

    return(
        <div className = {StyleSheet.RecipeAuthorBlock}>
            <img src={authorPhoto} alt = "Reasonable alt text" className={StyleSheet.imageUpdates}/>
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>
    );
}

function RecipeDescription() {
    return(
        <div>
            <div>
                <h1>✨White Wine Sangria✨</h1>
                <p>The perfect drink for floating on the river like the white trash I am :)</p>
            </div>
            <RecipeAuthor />
        </div>
    );
}

export default RecipeDescription;