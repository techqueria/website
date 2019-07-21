# Member Portal

- [Overview](#overview)
- [Goal](#goal)
- [Similar Platforms](#similar-platforms)
- [Core Feature List](#core-feature-list)
  - [Revamped Navbar & Footer](#revamped-navbar--footer)
  - [Revamped Team Page](#revamped-team-page)
  - [Add Impact Report Page](#add-impact-report-page)
  - [Revamped Slack Login & Sign Up Pages](#revamped-slack-login--sign-up-pages)
    - [Sign Up for Slack](#sign-up-for-slack)
    - [Login to Slack](#login-to-slack)
  - [Member Directory](#member-directory)
    - [Member Leaderboard](#member-leaderboard)
    - [Referrals](#referrals)
  - [Revamped User Acquisition & Engagement](#revamped-user-acquisition--engagement)
    - [Email Newsletter](#email-newsletter)
    - [Blog](#blog)
    - [Shop](#shop)
    - [Dedicated Analytics & Tracking](#dedicated-analytics--tracking)
  - [Job Board](#job-board)
    - [Slack Bot](#slack-bot)
    - [Gated Content](#gated-content)
  - [Event Activation](#event-activation)
  - [Community Resources](#community-resources)
    - [Internal Documentation](#internal-documentation)

## Overview

CASA - the member portal of Techqueria, the largest community for Latinx in Tech.

https://techqueria.org/casa

## Goal

Create a member portal that provides an enriched experience for our exponentially growing Latinx in Tech community.

This member portal should be entirely integrated and authenticated through our Slack community.

## Similar Platforms

- https://landit.com/playbook
- https://majorkey.devcolor.org/
- https://www.womenwhocode.com
- https://new.hiretechladies.com/
- https://www.pocitjobs.com/
- https://include.io/

## Core Feature List

### Revamped Navbar & Footer

- Navbar
  - About
  - Blog
  - Communities
  - Contact
  - Donate
  - Events
  - Jobs (Gated)
  - Members (Gated & Public)
  - Press
  - Resources
  - Shop
  - Support Us
  - Login
  - Sign Up
- Footer
  - Social Media (Icons)
    - Facebook
    - GitHub
    - Instagram
    - LinkedIn
    - Meetup
    - Twitter
    - YouTube

> Examples

- TBD

### Revamped Team Page

Showcases founders, board members, chapter leads, volunteers, etc.

> Examples

- https://girlswhocode.com/our-team/

### Add Impact Report Page

> Examples

- https://girlswhocode.com/2018report/

### Revamped Slack Login & Sign Up Pages

#### Sign Up for Slack

https://techqueria.org/slack/join

- Current form: https://docs.google.com/forms/d/e/1FAIpQLSdOHxMgRifkgekshIjNVvV5Ky4jlYIIbIhLwe1Z83ZF67is-Q/viewform?usp=send_form
- Revamp to form on website

> Examples

- https://www.hiretechladies.com/join/

#### Login to Slack

https://techqueria.org/casa/auth redirects to https://techqueria.org/casa which is gated content

- any user who is part of our Techqueria Slack Workspace https://techqueria.slack.com should be able to access Casa
- authentication with Slack
- sign in through website using Slack
- https://api.slack.com/docs/sign-in-with-slack

### Member Directory

https://techqueria.org/members

- look up members through dedicated directory
- would be like LinkedIn
- powered by Algolia
- users can choose to make their profiles indexed and public; private by default

#### Member Leaderboard

https://techqueria.org/members/leaderboard

- leaderboard synced from HeyTaco
- https://www.heytaco.chat/api
- https://www.heytaco.chat/api/v1/json/leaderboard/T0KQTUZ2B?days=365

> Example Verbiage

- Give and receive recognition for professional achievements from industry peers and leaders

#### Referrals

https://techqueria.org/referrals
https://techqueria.org/refer

- Should be public facing in case allies want to let their Latinx friends know about it
- Sends email to friend inviting them to sign up
- example: https://communitybot.co/?ref=producthunt

### Revamped User Acquisition & Engagement

#### Email Newsletter

https://techqueria.org/subscribe

- automatically integrates with Slack and Mailchimp
- every new registration gets added to MailChimp email list
- we should have a link to the email archive for easy reference

#### Blog

https://techqueria.org/blog

- Big announcements should all go on our blog and then be linked on social media, Slack, email newsletter, etc.

#### Shop

https://techqueria.org/shop

- all types of products showcasing Techqueria branding

#### Dedicated Analytics & Tracking

- MixPanel
- Google Analytics

### Job Board

https://techqueria.org/jobs

- allows the user to create and edit job posts
- users pay to be able to post jobs
- users can send jobs to Slack #jobs channel
- ability to filter & search certain jobs
- automated email newsletter for new jobs added or add to existing newsletter
- job type
  - Full-Time
  - Contract
  - Internship
  - Apprenticeship
- job location
  - integrate through Google Maps API

> Example Verbiage

- Pursue your next step with companies that want you to be part of their team.
- Tech Ladies connects you with the best jobs and opportunities in tech. We connect companies with the best techmakers. Join our community or post to our job board below: Connect with 50,000 Tech Ladies around the world and get access to our exclusive job board. Looking to diversify your team? Our job board reaches 50,000 women in tech.

#### Slack Bot

- Slack bot that integrates with web app
- Slack bot allows you to post to #jobs channel with predefined template from web app
- people cannot post to jobs automatically; they have to register through website & pay to post jobs there

#### Gated Content

- use Memberful to put pricing for certain job posts
- https://memberful.com/pricing/

### Event Activation

https://techqueria.org/events

- show events based on the location of the user
  - San Francisco
  - Austin
  - Chicago
  - NYC
  - Los Angeles

> Example Verbiage

- Advance your technical skills with other engineers at our 1,700 events annually.

### Community Resources

https://techqueria.org/career

- should include speaking opportunities/conference discounts
- goals/milestones/career advice/path
- gamified career path
- this gamification could be enhanced by highlight/giving props (HeyTaco) to folks that have helped you complete career milestones

> Example Verbiage

- Upgrade your skills with these Women Who Code recommended coding resources.
- Benefit from the \$1,000,000 in conference tickets and scholarships we award annually.
- Tutorials, articles, videos, and other educational materials to excel.
- Find leadership opportunities that expand your skills and enhance your career.

#### Internal Documentation

https://techqueria.slab.com

- for Techqueria members to easily contribute internal long-form documentation

> Example Verbiage

- TBD
