//functions that are reused
export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw Error('Errorrrr');
    return data;
  } catch (err) {
    console.log(err);
  }
};
