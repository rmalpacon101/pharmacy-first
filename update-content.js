#!/usr/bin/env node

/**
 * Content Update Script for Pharmacy First Website
 * 
 * This script allows easy updates to pharmacy information
 * without editing JSON directly.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CONTENT_FILE = path.join(__dirname, 'content.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function loadContent() {
  try {
    const data = fs.readFileSync(CONTENT_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading content.json:', error.message);
    process.exit(1);
  }
}

function saveContent(content) {
  try {
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2));
    console.log('✅ Content updated successfully!');
  } catch (error) {
    console.error('Error saving content.json:', error.message);
    process.exit(1);
  }
}

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

async function updatePharmacyInfo() {
  const content = loadContent();
  
  console.log('\n📝 Update Pharmacy Information\n');
  
  console.log(`Current name: ${content.pharmacy.name}`);
  const name = await question('New name (press Enter to keep current): ');
  if (name.trim()) content.pharmacy.name = name.trim();
  
  console.log(`Current phone: ${content.pharmacy.contact.phone}`);
  const phone = await question('New phone (press Enter to keep current): ');
  if (phone.trim()) content.pharmacy.contact.phone = phone.trim();
  
  console.log(`Current email: ${content.pharmacy.contact.email}`);
  const email = await question('New email (press Enter to keep current): ');
  if (email.trim()) content.pharmacy.contact.email = email.trim();
  
  saveContent(content);
}

async function updateHours() {
  const content = loadContent();
  
  console.log('\n🕒 Update Opening Hours\n');
  
  console.log(`Current Mon-Fri hours: ${content.pharmacy.hours.monday_friday}`);
  const weekdays = await question('New Mon-Fri hours (press Enter to keep current): ');
  if (weekdays.trim()) content.pharmacy.hours.monday_friday = weekdays.trim();
  
  console.log(`Current Saturday hours: ${content.pharmacy.hours.saturday}`);
  const saturday = await question('New Saturday hours (press Enter to keep current): ');
  if (saturday.trim()) content.pharmacy.hours.saturday = saturday.trim();
  
  console.log(`Current Sunday hours: ${content.pharmacy.hours.sunday}`);
  const sunday = await question('New Sunday hours (press Enter to keep current): ');
  if (sunday.trim()) content.pharmacy.hours.sunday = sunday.trim();
  
  saveContent(content);
}

async function viewCurrentInfo() {
  const content = loadContent();
  
  console.log('\n📋 Current Pharmacy Information\n');
  console.log(`Name: ${content.pharmacy.name}`);
  console.log(`Address: ${content.pharmacy.address.street}, ${content.pharmacy.address.city} ${content.pharmacy.address.postcode}`);
  console.log(`Phone: ${content.pharmacy.contact.phone}`);
  console.log(`Email: ${content.pharmacy.contact.email}`);
  console.log('\nOpening Hours:');
  console.log(`Mon-Fri: ${content.pharmacy.hours.monday_friday}`);
  console.log(`Saturday: ${content.pharmacy.hours.saturday}`);
  console.log(`Sunday: ${content.pharmacy.hours.sunday}`);
  console.log(`\nServices: ${content.services.length} services listed`);
  console.log(`Call to Actions: ${content.callToActions.length} CTAs configured`);
}

async function main() {
  console.log('🏥 Pharmacy First Website Content Manager\n');
  
  while (true) {
    console.log('\nSelect an option:');
    console.log('1. View current information');
    console.log('2. Update pharmacy info (name, phone, email)');
    console.log('3. Update opening hours');
    console.log('4. Exit');
    
    const choice = await question('\nEnter your choice (1-4): ');
    
    switch (choice.trim()) {
      case '1':
        await viewCurrentInfo();
        break;
      case '2':
        await updatePharmacyInfo();
        break;
      case '3':
        await updateHours();
        break;
      case '4':
        console.log('\n👋 Goodbye!');
        rl.close();
        return;
      default:
        console.log('❌ Invalid choice. Please enter 1, 2, 3, or 4.');
    }
  }
}

if (require.main === module) {
  main().catch(console.error);
}