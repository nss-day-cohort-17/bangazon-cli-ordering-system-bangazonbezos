# Bangazon

## The Command Line Ordering System

In this group project, you will be allowing a user to interact with a basic product ordering database.

## Ordering System Interface

### Main Menu

```bash
*********************************************************
**  Welcome to Bangazon! Command Line Ordering System  **
*********************************************************
1. Create a customer account
2. Choose active customer
3. Create a payment option
4. Add product to shopping cart
5. Complete an order
6. See product popularity
7. Leave Bangazon!
>
```

### Create Customer

```bash
Enter customer name
>

Enter street address
>

Enter city
>

Enter state
>

Enter postal code
>

Enter phone number
>
```

### Choose active customer

```bash
Which customer will be active?
1. John Q. Public
2. Svetlana Z. Herevazena
>
```


### Create Payment Option

```bash
Enter payment type (e.g. AmEx, Visa, Checking)
>

Enter account number
>
```

### Add Product to an Order

> **Note:** These are examples. Add your own product names, please.

To make it easier to add multiple products, when the user selects a product to order, display the menu of products again. Make sure the last option of *Back to main menu* so the user can specify that no more products are needed.

```bash
1. Diapers
2. Case of Cracking Cola
3. Bicycle
4. AA Batteries
...
9. Done adding products
```

### Complete an Order

##### If no products have been selected yet

```bash
Please add some products to your order first. Press any key to return to main menu.
```

##### If there are current products in an order

```bash
Your order total is $149.54. Ready to purchase
(Y/N) >

# If user entered Y
Choose a payment option
1. Amex
2. Visa
>

Your order is complete! Press any key to return to main menu.

# If user entered N, display the main menu again
```

Once the order is complete, show the main menu again, where the user can start creating another order.

### See Product Popularity

When selecting this option, you will produce a command line report that looks like the following.

```bash
Product           Orders     Customers  Revenue
*******************************************************
AA Batteries      100         20        $990.90
Diapers           50          10        $640.95
Case of Cracki... 40          30        $270.96
*******************************************************
Totals:           190         60        $1,902.81

-> Press any key to return to main menu
```

1. The product column must be 18 characters wide, and will display a maximum of 17 characters for the product name.
1. The orders column must be 11 characters wide.
1. The customers column must be 11 characters wide.
1. The revenue column must be 15 characters wide.

# Requirements

You will create a series of prompts that will allow the user to create various types of data in your ordering system.

1. Use the npm module `prompt` to create an interface for prompting your user for input.
1. Your team must have full test coverage for all functionality. Start with writing unit tests.
1. You must use the db you created in the earlier SQL exercise. Choose one team member's implementation to be your group's database.
1. For the Product Popularity section, search for an npm module that will output your report in table format to the console.





#Page Handling Options

Page: Main Menu
display:
*********************************************************
**  Welcome to Bangazon! Command Line Ordering System  **
*********************************************************
1. Create a customer account
2. Choose active customer
3. Create a payment option
4. Add product to shopping cart
5. Complete an order
6. See product popularity
7. Leave Bangazon!
Prompt: accepts a number

Page: Create Customer (- Part 1)
Prompt:
Enter customer name
>

Enter street address
>

Enter city
>

Enter state
>

Enter postal code
>

Enter phone number

Page: Create Customer (Part 2)
display: customer info as enter
Prompt: Confirm infor is correct Y/N

Page: Add Products (Part 1)
Display: List of all products and a number for each
Also include at end Done Adding Products (with D as entry), and Return to Main Menu(cancel order) with B as the entry
Prompt: Choose item by number

Page: Add Products (Part 2)
once product is selected:
Display product
Prompt: Enter product quantity

Page: Add Products (Part 3)
Display product name and quantity
Prompt: Confirm product order as correct Y/N


Page: Confirm Cart (Part 1)
Display : All products (and their quanitities) for order
Prompt: Edit Order, Return to Shopping, Confirm Order Contents

Page: Confirm Cart (Part 2)
If choose edit:
Displays orderlines
Prompt: Choose line to edit

Page: Confirm Cart (Part 3)
once an orderline is choosen
Displays product
Prompt: Edit quantity (to cancel enter quantity zero)

Page: Ready To Purchase
Display: total
Prompt: Y/N/Cancel Order

Page: Payment Options
if stored options exists:
  Display: stored options, and option to create new payment option
  Prompt: Choose Payment Option

Page: CreatePaymentOption (part 1):

Prompt: Payment nickname, account Number

Page CreatePaymentOption (part 2)
display: payment option entered
Prompt: Confirm entry as correct Y/N

Page: Place Order
Prompt: Place order now? Y/N

Page: Select Active Customer
Display: List of customers
Prompt: Choose Customer

Page: See Product Popularity
Display: Products by popularity
Prompt: Return to Main Menu, Enter B
