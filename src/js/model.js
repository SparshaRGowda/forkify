import { API_URL } from './config';
import { getJSON } from './helper';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      source_url: recipe.source_url,
      image_url: recipe.image_url,
      title: recipe.title,
      cooking_time: recipe.cooking_time,
      servings: recipe.servings,
    };
    console.log(state.recipe);
  } catch (err) {
    console.log(err);
  }
};
