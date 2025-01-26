import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import RecipeView from './views/recipeView';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  // try {
  const id = window.location.hash.slice(1); //hash is where it starts from #11111 in url - ex:http://localhost:1234/#5ed6604591c37cdc054bc886 - slice(1) gives the id after hash #
  // console.log(id);
  if (!id) return;

  RecipeView.renderSpinner();

  //loading recipe
  await model.loadRecipe(id);

  //Rendering recipe
  RecipeView.render(model.state.recipe);
  // } catch (err) {
  //   console.log(err);
  // }
};
// controlRecipe();
// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
//above 2 lined combined below
['hashchange', 'load'].forEach(e => window.addEventListener(e, controlRecipe));
