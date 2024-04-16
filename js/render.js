const footerCopy = document.getElementById('footer')
const aboutmeSocialDiv =  document.getElementById('aboutmeSocialDiv')
const educationListDiv = document.getElementById('educationListDiv')
const eventsGallery = document.getElementById('eventsGallery')
const projectsListDiv =  document.getElementById('projectsListDiv')
const techStackDiv = document.getElementById('techStackDiv')

button_links.forEach(button => {
  const aboutme_social_button = document.createElement('a')
  aboutme_social_button.className = 'aboutme_social_button lexend'
  aboutme_social_button.setAttribute('href', button.link)
  aboutme_social_button.setAttribute('target', '_blank')
  const Icon = document.createElement('i')
  Icon.className = `fa-brands ${button.icon}`
  const buttonName = document.createElement('span')
  buttonName.className = 'button'
  buttonName.innerText = button.name
  aboutme_social_button.append(Icon)
  aboutme_social_button.append(buttonName)
  aboutmeSocialDiv.appendChild(aboutme_social_button)
})

tech_stack.forEach(tech => {
  const tech_stack_button = document.createElement('span')
  tech_stack_button.className = 'tech_stack_button'
  const img = document.createElement('img')
  img.setAttribute('width', '40')
  img.setAttribute('src', tech.src)
  img.setAttribute('title', tech.title)
  img.setAttribute('alt', tech.title)
  tech_stack_button.append(img)
  techStackDiv.appendChild(tech_stack_button)
})

education.forEach(innerEducation => {
  const education_div_main = document.createElement('div')
  education_div_main.className = 'education_div_main outfit'
  const education_timeline = document.createElement('span')
  education_timeline.className = 'education_timeline'
  education_timeline.innerText = innerEducation.duration

  const education_div = document.createElement('div')
  education_div.className = 'education_div'
  const education_name = document.createElement('span')
  education_name.className = 'education_name outfit'
  education_name.innerText = innerEducation.course

  const education_description_div = document.createElement('div')
  education_description_div.className = 'education_description_div'

  const education_description = document.createElement('span')
  const education_description_2 = document.createElement('span')
  education_description.className = 'education_description lexend'
  education_description.style.opacity = 0.8
  education_description_2.className = 'education_description lexend'
  education_description.innerText = `${innerEducation.name} - ${innerEducation.location}`
  education_description_2.innerText = innerEducation.mark

  education_div_main.append(education_timeline)
  education_div.append(education_name)
  education_description_div.append(education_description)
  education_description_div.append(education_description_2)
  education_div.append(education_description_div)
  education_div_main.append(education_div)
  educationListDiv.appendChild(education_div_main)
})

all_events.reverse().forEach(events => {
  const events_image_box = document.createElement('div')
  events_image_box.className = 'events_image_box'

  const events_image = document.createElement('img')
  events_image.className = 'events_image'
  events_image.setAttribute('src', `./assets/${events.image}.jpg`)
  events_image.setAttribute('loading', 'lazy')

  const events_transparent_box = document.createElement('div')
  events_transparent_box.className = 'events_transparent_box outfit'

  const events_caption = document.createElement('div')
  events_caption.className = 'events_caption'

  const span1 = document.createElement('span')
  span1.style = 'font-size: 17px; font-weight: 600'
  span1.innerText = events.name
  const span2 = document.createElement('span')
  span2.style = 'font-size: 14px'
  span2.innerText = `${events.place}, ${events.date}`
  const span3 = document.createElement('span')
  span3.className = 'events_opacity_low'
  span3.style = 'font-size: 15px; font-weight: 500'
  span3.innerText = events.description

  events_caption.append(span1)
  events_caption.append(span2)
  events_caption.append(span3)
  events_transparent_box.append(events_caption)
  events_image_box.append(events_image)
  events_image_box.append(events_transparent_box)

  eventsGallery.appendChild(events_image_box)
})

projects.forEach(innerProject => {
  const project_div = document.createElement('div')
  project_div.className = 'project_div'
  
  const project_image =  document.createElement('img')
  project_image.className = 'project_image'
  project_image.setAttribute('src', `./assets${innerProject.banner[0]}`)
  project_image.setAttribute('loading', 'lazy')

  const project_details_div = document.createElement('div')
  project_details_div.className = 'project_details_div'

  const project_name_icon_div =  document.createElement('div')
  project_name_icon_div.className = 'project_name_icon_div'
  if (innerProject.icon != null) {
    const project_icon =  document.createElement('img')
    project_icon.className = 'project_icon'
    project_icon.setAttribute('src', `./assets${innerProject.icon}`)  
    project_name_icon_div.append(project_icon)
  }
  const project_name = document.createElement('span')
  project_name.className = 'project_name outfit'
  project_name.innerText = innerProject.name
  project_name_icon_div.append(project_name)

  project_details_div.append(project_name_icon_div)

  const project_description = document.createElement('span')
  project_description.className = 'project_description lexend'
  project_description.innerText = innerProject.description

  project_details_div.append(project_description)

  const project_technologies = document.createElement('span')
  project_technologies.className = 'project_technologies outfit'
  project_technologies.innerText = innerProject.technologies.join(' , ')

  project_details_div.append(project_technologies)

  const project_link_div = document.createElement('div')
  project_link_div.className = 'project_link_div'

  innerProject.links.forEach(link => {
    const project_link_icon =  document.createElement('a')
    project_link_icon.className = 'project_link_icon'
    project_link_icon.setAttribute('href', link.url)
    project_link_icon.setAttribute('target', '_blank')
    
    const Icon = document.createElement('i')
    if (link.url.startsWith("https://github.com")) {
      Icon.className = 'fa-brands fa-github'
    } else if (link.url.includes("sourcexchange") || link.url.includes("builtbybit")) {
      Icon.className = 'fa-solid fa-dollar-sign'
    } else {
      Icon.className = 'fa-solid fa-link'
    }
    project_link_icon.append(Icon)

    const project_link_name =  document.createElement('span')
    project_link_name.className = 'project_link_name outfit'
    project_link_name.innerText = link.name
    project_link_icon.append(project_link_name)

    project_link_div.appendChild(project_link_icon)
  })  

  project_details_div.append(project_link_div)

  project_div.append(project_image)
  project_div.append(project_details_div)
  projectsListDiv.appendChild(project_div)
})

footerCopy.innerText = `© ${new Date().getFullYear()} • Made with 💗 by Yuvaraja`

console.log(`
Y88b    / 888   | Y88b      /      e      888~-_        e          888      e      
 Y88b  /  888   |  Y88b    /      d8b     888   \\      d8b         888     d8b     
  Y88b/   888   |   Y88b  /      /Y88b    888    |    /Y88b        888    /Y88b    
   Y8Y    888   |    Y888/      /  Y88b   888   /    /  Y88b       888   /  Y88b   
    Y     Y88   |     Y8/      /____Y88b  888_-~    /____Y88b  |   88P  /____Y88b  
   /       "8__/       Y      /      Y88b 888 ~-_  /      Y88b  \\__8"  /      Y88b
`)