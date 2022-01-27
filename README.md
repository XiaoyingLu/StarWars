
#  React Full Stack Project

==Note==: This project can be accessed from the link: http://ec2-54-90-218-44.compute-1.amazonaws.com/

## Project Overview
This is a full-stack project, with front-end and back-end code in separate directories.
- **Front-end tech stack**
	- React + Redux
	- React UI library: [Material-UI](https://mui.com/getting-started/installation/)
	- Build tools: Webpack + Babel
	- UI desgin tools: [Material Design](https://material.io/design)
	- Cloud service: AWS EC2
- **Back-end tech stack**
	- Nodejs + Express
	- Data fetched from [Star Wars API]( ​https://swapi.dev/​ )
	- Cloud service: AWS EC2


##  Installation Guide
*To run the code locally, please follow the steps below:*
- Clone the project from this GitHub repository:  
	```
	git clone https://github.com/XiaoyingLu/StarWars.git
	```
- Back-end
	- Access the back-end directory: ```cd backend```
	- Run the code: ```npm start```
	- REST APIs:
		- GET people (only 10): ```/people```
		- GET a specific person by Id: ```/people/:id```
- Front-end:
	- Access the front-end directory: ```cd frontend```
	- Run the code: ```npm start```
	- Build the code: ```npm run build``` (it will create a folder called **dist** in the root directory and generate the built files there)
	
## Cloud Services
Both front-end and back-end are deployed on AWS EC2 instances.
The website is deployed using NGINX and PM2.

## Challenges and Future Work
1. The back-end API ''GET people'' request fetch 10 people only, can be improved to fetch all people data from Star Wars API.
2. With all people data returned from the REST API, the front-end UI will need to have pagination feature that allows to load divided data across a number of different pages.
3. In terms of the cloud services, I have originally deployed the front-end UI through AWS Amplify, which automatically secured the hosting website through HTTPS. As a result, the website could not communicate with the back-end API since it is a HTTP server. 
A possible solution is to get a SSL certificate from [letsencrypt](https://letsencrypt.org/) and add that on the server EC2 instance.
