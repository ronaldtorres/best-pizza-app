const getImgUrl = (path) => require(`@/assets/${path}`) ?? "";

export { getImgUrl };
