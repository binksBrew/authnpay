import workspace_img1 from "../assets/platforms/workspace/gmail.png";
import workspace_img2 from "../assets/platforms/workspace/teams.png";
import workspace_img3 from "../assets/platforms/workspace/docs.png";
import workspace_img4 from "../assets/platforms/workspace/meet.png";
import workspace_img5 from "../assets/platforms/workspace/outlook.png";
import workspace_img6 from "../assets/platforms/workspace/drive.png";

import ecommerce_img1 from "../assets/platforms/ecommerce/amazon.png";
import ecommerce_img2 from "../assets/platforms/ecommerce/flipkart.png";

import socialmedia_img1 from "../assets/platforms/socialmedia/facebook.png";
import socialmedia_img2 from "../assets/platforms/socialmedia/twitter.png";
import socialmedia_img3 from "../assets/platforms/socialmedia/instagram.png";
import socialmedia_img4 from "../assets/platforms/socialmedia/linkedin.png";

import bank_img1 from "../assets/platforms/banks/icici.png";
import bank_img2 from "../assets/platforms/banks/axisbank.png";
import bank_img3 from "../assets/platforms/banks/sbi.png";
import bank_img4 from "../assets/platforms/banks/yesbank.png";
import bank_img5 from "../assets/platforms/banks/boi.png";
import bank_img6 from "../assets/platforms/banks/pnb.png";

import quickcommerce_img1 from "../assets/platforms/quickcommerce/swiggy.png";
import quickcommerce_img2 from "../assets/platforms/quickcommerce/zomato.png";

import cloud_img1 from "../assets/platforms/cloud/aws.png";
import cloud_img2 from "../assets/platforms/cloud/gcloud.png";

const platformGroups = [
  {
    groupName: "Social Media",
    services: [
      { name: "Facebook", icon: socialmedia_img1 },
      { name: "Twitter", icon: socialmedia_img2 },
      { name: "Instagram", icon: socialmedia_img3 },
      { name: "Linkedin", icon: socialmedia_img4 },
    ],
  },
  {
    groupName: "Bank",
    services: [
      { name: "ICICI Bank", icon: bank_img1 },
      { name: "Axis Bank", icon: bank_img2 },
      { name: "SBI", icon: bank_img3 },
      { name: "YES Bank", icon: bank_img4 },
      { name: "BOI", icon: bank_img5 },
      { name: "PNB", icon: bank_img6 },
    ],
  },
  {
    groupName: "Ecommerce",
    services: [
      { name: "Amazon", icon: ecommerce_img1 },
      { name: "Flipkart", icon: ecommerce_img2 },
    ],
  },
  {
    groupName: "Quickcommerce",
    services: [
      { name: "Swiggy", icon: quickcommerce_img1 },
      { name: "Zomato", icon: quickcommerce_img2 },
    ],
  },
  {
    groupName: "Workspace",
    services: [
      { name: "Gmail", icon: workspace_img1 },
      { name: "Microsoft Teams", icon: workspace_img2 },
      { name: "Docs", icon: workspace_img3 },
      { name: "Gmeet", icon: workspace_img4 },
      { name: "Outlook", icon: workspace_img5 },
      { name: "Drive", icon: workspace_img6 },
    ],
  },
  {
    groupName: "Cloud",
    services: [
      { name: "AWS", icon: cloud_img1 },
      { name: "Google Cloud", icon: cloud_img2 },
    ],
  },
];

export default platformGroups;
