# Responsibilities
**Luan Nguyen:** Create the layout structure, Experience Page, Languages Page  
**Hung Phung:** Registration Page, Login Page, Project List Page  
**Michael Anetor:** Contact Me Page, Basic Information Page, Cover Letter Page  
**Roman Mbwasi:** Resume List (Home) Page, Profile Page, Job Objective Page, Education Page   

## EndPoints
## Education EndPoints
**Add Education**

Authorization Header Required:

Authorization: Bearer {{AuthToken}}

POST: {{BASE_URL}}/api/education/add

```javascript
{
  "user_id": "5f29e49520781d0017b465b9",
  "school": "Humber College",
  "degree": "Masters",
  "field": "IT",
  "start": "2000",
  "finish": "2010"
}
```

# Front-End

Front-End uses React

## Setup

Go to the frontend folder /frontend, then create .env from .env.example

## Installation

Install the packages

```bash
npm install
```

## Usage

```python
npm start
```

# Back-End

Back-End uses Express and MongoDB

## Setup

Go to the frontend folder /backend, then create .env from .env.example

## Installation

Install the packages

```bash
npm install
```

## Usage

```python
npm start
```


