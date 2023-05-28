<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">ConnectedSpine</h3>

  <p align="center">
    Web app where users can answer questions about their back pain to get recommended treatment options for possible diagnoses.
    <br />
    <a href="https://github.com/cs394-s23/ConnectedSpine"><strong>Explore the Repo »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#test">Test</a></li>
        <li><a href="#scripts">Scripts</a></li>
        <li><a href="#firebase">Firebase</a></li>
        <li><a href="#notes">Notes</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributers">Contributers</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://connectedspine-6185c.web.app/)
[![Product Question Screen Shot][question-screenshot]](https://connectedspine-6185c.web.app/)

A web application that serves as a remote and immediate back pain advisor.
You can fill out the questionnaire detailing your age, symptoms, history with back pain, and other information to receive a recommendation on what your course of treatment should be.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

## React Vitest

Using React Vite

[Full Vite documentation](https://github.com/criesbeck/react-vitest)

## Installation

```
git clone https://github.com/cs394-s23/ConnectedSpine
npm install
```

## Test

Verify that the initial app works. Run

```
npm start
```

and open the URL displayed.

Verify that the unit tests work with

```
npm test
```

Two tests should run and pass.

## Scripts

**package.json** defines the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm start     | Runs the app in the development mode.               |
| npm run dev   | Runs the app in the development mode.               |
| npm run build | Builds the app for production to the `dist` folder. |
| npm run serve | Serves the production build from the `dist` folder. |
| npm test      | Starts a Jest-like test loop                        |

## Firebase

To set up the Firebase, run

```
npm install firebase-tools -g
firebase login
firebase init
```

Select Hosting: Configure and deploy Firebase Hosting sites.

Select Use an existing project.

Select your Firebase Project (e.g. ConnectedSpine).

Specify dist when firebase init asks what the public directory is.

Say no when Firebase asks about adding Github Actions.

Say yes when Firebase asks about configuring as a single-page app.

Say no if Firebase asks you to overwrite build/index.html.

To deploy, run

```
npm run build
firebase deploy
```

## Notes

When including relative links to images in the public folder, you do not need to specifiy 'public/' before the image names.

Additionally, image names are case sensative, so make sure they are _all lowercase_ in your local repo.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

_For examples of how to use the website and code, please refer to the [Documentation](https://docs.google.com/document/d/1m3FPN4m_aVhri7hZ02f7f3lu09_bb2iO647or_fIkv0/edit?usp=sharing)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Display results and recommended providers based on questionnaire answers
  - [ ] Query nearby providers based on the user's zipcode
- [x] Store a user's most recent questionnaire answers
  - [ ] Store all of the user's previous questionnaire answers
- [ ] Feedback form where a user can leave feedback on the questionnaire results

<!-- See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTERS -->

## Contributers

Harita Duggirala - [https://github.com/HaritaD](https://github.com/HaritaD)

Emily Kohlberg - [https://github.com/EmilyKohlberg](https://github.com/EmilyKohlberg)

Alex Modugno - [https://github.com/alexmodugno413](https://github.com/alexmodugno413)

Laura Park - [https://github.com/laurappark](https://github.com/laurappark)

Derek Yu - [https://github.com/dyu222](https://github.com/dyu222)

Emily Zhang - [https://github.com/emily-fangdi-zhang](https://github.com/emily-fangdi-zhang)

Project Link: [https://github.com/cs394-s23/ConnectedSpine](https://github.com/cs394-s23/ConnectedSpine)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: images/home_screenshot.png
[question-screenshot]: images/question_screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
