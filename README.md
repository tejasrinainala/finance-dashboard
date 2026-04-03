# Finance Dashboard

## Overview

This is a simple finance dashboard built using React. It allows users to track income and expenses, view transactions, and understand spending patterns through visualizations.

## Features

- Summary cards (Balance, Income, Expenses)
- Transactions list with search and filter
- Charts (Line chart and Pie chart)
- Insights (highest spending category)
- Role-based UI (Admin & Viewer)
- Add transaction functionality (Admin only)
- Data persistence using localStorage

## Tech Stack

- React (Vite)
- Recharts

## Setup Instructions

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:5173/

## Approach

The application is built using modular components such as SummaryCards, TransactionList, Charts, and Insights. State is managed using React hooks like useState and useEffect.

## Notes

The application uses mock data for demonstration purposes. Newly added transactions are stored locally using browser localStorage.
