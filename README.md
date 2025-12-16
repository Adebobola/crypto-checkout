# Crypto-Cash Conversion App

A lightweight React/Next.js application for converting cryptocurrencies to cash, designed with usability, interactivity, and responsive UI in mind.


## Project Overview

This project allows users to:
- Convert cryptocurrencies to cash.
- Select which cryptocurrency to pay with and which wallet to use.
- Automatically see the equivalent amount in cash as they type the crypto amount.
- Ensure a smooth user experience with dropdowns, buttons, and tab navigation.


## Tech Stack

- **React 18 / Next.js 16**  
- **TypeScript** for type safety  
- **Tailwind CSS** for styling  
- **Next/Image** for optimized image handling  


## Project Structure

## /app
- **globals.css** - applies global styles across the entire application. 
- **layout.tsx** - defines the shared layout for the set of pages. 
- **page.tsx** - renders the conversion interface and maintains states. 

## /components
- **AmountInputCard.tsx** – Reusable input card component for amounts  
- **ConversionTabs.tsx** – Tab navigation between conversion types  
- **CurrencyDropdown.tsx** – Dropdown for selecting currency  
- **WalletDropdown.tsx** – Dropdown for selecting wallet  
 

## /components/ui/pages
- **ui/Button.tsx** – Reusable button component  
- **ui/SelectField.tsx** -  Reusable dropdown compoent

## /components/assets
- **.svg** – Icons for currencies, wallets, dropdowns


### `ConversionTabs`
- Renders three tabs: `Crypto to Cash`, `Cash to Crypto`, `Crypto to Fiat Loan`.  
- Highlights the active tab.  
- Clickable buttons use `cursor-pointer` styling for interactivity.

### `AmountInputCard`
- Displays an input field with a label and currency selection.  
- Props:
  - `label`: field label (e.g., “You Pay”)  
  - `amount`: value to display  
  - `onChange`: callback for input changes  
  - `currency`: the currency label (e.g., ETH)  
  - `currencyIcon`: optional icon for the currency  
  - `readOnly`: disables typing for certain fields  
- Supports optional children (like dropdowns).

### `CurrencyDropdown` & `WalletDropdown`
- Custom dropdown components for selecting currency and wallet.  
- Automatically closes when clicking outside.

### `Button`
- Reusable button component.  
- Disabled until a wallet is selected (`disabled={!wallet}`).  
- Styling changes when disabled (`opacity-50`).

---

## Functionality

1. **Tabs Navigation**
   - Users can switch between different conversion types.  
   - Only the active tab content is displayed.

2. **You Pay / You Receive Inputs**
   - Users enter an amount in “You Pay”.  
   - “You Receive” automatically is updated with the appropraite respective amount.  
   - The decimal point is immutable to prevent formatting issues.  
   - “You Receive” is `readOnly` so users cannot edit it directly.

3. **Dropdowns**
   - Users select a currency and wallet using dropdowns.  
   - Clicking outside closes the dropdown.  
   - Selected options are displayed in the input cards.

4. **Convert Now Button**
   - Disabled until the user selects a wallet.  
   - Changes style when disabled (`opacity-50`).

## How It Works

- **State Management**
  - React `useState` stores `payAmount`, `receiveAmount`, `currency`, `wallet`, and dropdown visibility.
  - `useEffect` handles click-outside behavior for dropdowns.

## Setup and Running

1. **Clone the repository**
    - git clone repo url
    - cd repo-folder

2. **Install dependencies**
    - npm install

3. **Run the development server**
    - npm run dev

4. **Open the app**
    - navigate to http://localhost:3000 in your browser.