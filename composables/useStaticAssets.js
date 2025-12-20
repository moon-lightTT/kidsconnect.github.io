export const useStaticAssets = () => {
  const getImage = (filename) => {
    return `/${filename}?v=${Date.now()}`
  }
  
  return { getImage }
}