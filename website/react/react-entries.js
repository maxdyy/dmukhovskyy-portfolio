// Add new react components here 
// The path to the component is relative to the webpack.config file
const reactComponents = './website/react/components'
const reactPages = './website/react/pages'

module.exports = {
  projects: `${reactPages}/projects`,
  contacts: `${reactPages}/contacts`,
  vendor: ['react', 'react-dom'],
}