![Logo](https://user-images.githubusercontent.com/56173614/120265697-8811ef80-c26e-11eb-9d4f-e129d37d0750.png)
Media project focused on increasing awareness about ocean pollution. The site is deployed to this [link](https://affectionate-bohr-df8be6.netlify.app/).

## Designs
Check out the project's Figma [here](https://www.figma.com/file/H9cc0642iE5lUzLiup6LrR/Website?node-id=149%3A192).
[2-4 screenshots from the app]

## Architecture
### Tech Stack
* [React](https://reactjs.org/)

### Notable Libraries
* [Tailwind CSS](https://tailwindcss.com/)
* [Framer Motion](https://www.framer.com/motion/)
* [Lottie React](https://github.com/LottieFiles/lottie-react)
* [React Chart.js](https://www.npmjs.com/package/react-chartjs-2)

### Style
* [Airbnb's ESLint Configuration](https://airbnb.io/javascript/)

### File Structure

```
├──oceanus-media-project/                     # root directory
|  └──.github/
|  └──images/
|  └──src/                     
|     └──components/                          # All components           
|        └──explore/                          # Folder containing static 'explore' page components
|           └──action/                        # Take action page
|           └──health/                        # Human Health page
|           └──home/                          # Home page of static site
|           └──methods/                       # Methods/sources for project page on static site
|           └──navBar/                        # Navigation bar for static site
|           └──plastic/                       # More about plastics page
|           └──suzie/                         # More about sea turtles page
|           └──vectors/                       # Custom SVGs from Figma for static page
|        └──flows/                            # Folder containing flows related components
|           └──combinedFlow/                  # Folder containing components and data for combined flow
|               └──animations/                # Folder containing animations-related data
|               └──constants.js     
|               └──data.js                    # Folder containing animations-related data
|               └──index.js           
|           └──ecologicalFlow/                # Folder containing components and data for ecological flow
|               └──animations/                # Folder containing animations-related data
|               └──constants.js     
|               └──data.js                    # Folder containing animations-related data
|               └──index.js  
|           └──humanFlow/                     # Folder containing components and data for human flow
|               └──animations/                # Folder containing animations-related data
|               └──constants.js     
|               └──data.js                    # Folder containing animations-related data
|               └──index.js  
|           └──introFlow/                     # Folder containing components and data for intro flow
|               └──toggle/                    # Component for toggle using Figma Motion
|               └──constants.js     
|               └──data.js                    # Folder containing animations-related data
|               └──index.js  
|        └──home/                             # Folder containing components for home page
|               └──america.js 
|               └──constants.js      
|               └──index.js  
|        └──lib/                              # Library of assorted reusable components
|           └──animatedPlastics/              # Plastic animation using Framer motion
|           └──barChart/                      # Chart.js bar graph
|           └──bubbleChart/                   # Chart.js bubble graph
|           └──lineChart/                     # Chart.js line graph
|           └──lottieAnimation/               # Reusable component for rendering from Lottie
|           └──navigationPage/                # Flow navigation component
|           └──pieChart/                      # Chart.js pie graph
|           └──scrollToTop/                   # Wrapper for scrolling page to top on navigation
|           └──vectors/                       # Custom SVGs from Figma
|        └──app.js
|     └──data/                                # Contains relevant datasets and python scripts
|         └──raw/                             # Folder containing raw data
|         └──README.md                        # Details on methodology
|         └──scripts/                         # Folder containing python scripts for data manipulation
|           └──plastic-in-oceans.py           
|           └──future-plastic-data.py         
|           └──plastic-per-person.py          
|         └──cleaned-plastic-in-oceans.json   # Cleaned data for plastic in oceans visualization
|         └──future-plastic-data.json         # Cleaned data for future plastic in oceans visualization
|         └──plastic-per-person.json          # Cleaned data for individidual plastic waste visualization
|     └──_redirects
|     └──index.html
|     └──index.js
|     └──style.scss.                          # Styling with CSS/SASS
|  └──.babelrc 
|  └──.eslintrc 
|  └──.gitignore 
|  └──README.md
|  └──package.json
|  └──tailwind.config.js                      # Styling config with Tailwind.js
|  └──webpack.config.js
|  └──yarn.lock
```

For more detailed documentation on file structure and specific functions in the code, feel free to check the project files themselves.

## Acknowledgments
We would like to thank Professor Michael Cox and the rest of our ENVS 80.14 classmates for their enthusiasm and thoughtful feedback.

---

### Designed and developed by
* Catherine Parnell '22, developer + designer
* Julie Jones '22, designer + animator
