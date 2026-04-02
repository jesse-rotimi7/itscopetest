# Utils Folder

This folder contains utility functions and data that can be reused across different components in the application.

## Structure

```
src/utils/
├── index.ts              # Main export file
├── README.md             # This documentation
└── products/
    └── productData.ts    # Product data and related functions
```

## Products Module

The `products` folder contains all product-related data and utility functions.

### Files

- **`productData.ts`** - Contains:
  - Product interfaces (`Product`, `ProductSpecs`)
  - Product data array
  - Category configurations
  - Helper functions for categories and specs

### How to Use

#### Importing Products

```typescript
// Import everything
import { products, getCategoryColor, getCategoryDisplayName } from '../utils';

// Import specific items
import { products } from '../utils';
import { getCategoryColor } from '../utils';
```

#### Adding New Products

1. **Add product image** to `src/assets/images/products/`
2. **Import the image** in `src/utils/products/productData.ts`
3. **Add product object** to the `products` array:

```typescript
{
  id: 4, // Use next available ID
  name: "Product Name",
  price: "₦100,000",
  newprice: "₦80,000",
  image: importedImage,
  category: "existing_category", // or create new
  specs: {
    feature1: "value1",
    feature2: "value2"
  }
}
```

#### Adding New Categories

1. **Add to categories array** in `productData.ts`:
```typescript
{ id: "tablets", name: "Tablets", color: "bg-indigo-600" }
```

2. **Add color case** in `getCategoryColor()` function:
```typescript
case 'tablets': return 'bg-indigo-600'
```

### Available Helper Functions

- `getCategoryColor(category)` - Returns Tailwind color class for category
- `getCategoryDisplayName(category)` - Returns formatted category name
- `getPreviewSpecs(specs)` - Returns first 3 specs for preview display

### Benefits

- **Centralized data management** - All products in one place
- **Reusable functions** - Import anywhere in the app
- **Easy maintenance** - Update products without touching components
- **Type safety** - Full TypeScript support
- **Clean imports** - Single import statement for all product data
