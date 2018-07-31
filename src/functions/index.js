import { nextApp as next } from "./app/app"
import { mars } from "./worlds/mars"
import { jupiter } from "./worlds/jupiter"
import { mailchimpAuth } from "./mailchimp/auth"
import {getListOfLists, getContacts} from './mailchimp/import.js';
import {addMember, getMemberDetails, getOneMember, getMemberInListEurope} from './users/members.js';

/*
Namespace application services with function groups.
Partially deploy namespaces for independent service updates.
*/

// SSR Next.js app Cloud Function used by Firebase Hosting
// yarn deploy-app
const app = {
  next,
  // other Hosting dependencies
}

// Mircoservices that make up the Greetings service
// yarn deploy-functions
const greetings = {
  mars,
  jupiter,
  mailchimpAuth
  // other funcs
}

const mailchimp = {
  getListOfLists,
  getContacts
}

const users = {
  addMember,
  getMemberDetails,
  getOneMember,
  getMemberInListEurope
}

export { app, greetings, mailchimp, users }
