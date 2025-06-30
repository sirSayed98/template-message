# Template Message Builder

A modern React application for creating and previewing WhatsApp-style message templates with interactive form controls and real-time preview functionality.

## 🌟 Project Overview

Template Message Builder is a user-friendly web application that enables users to create, customize, and preview message templates commonly used in business communications and messaging platforms. The application provides an intuitive interface with form controls on the left and a live mobile preview on the right, making it easy to design professional message templates with headers, body content, footers, and interactive buttons.

![image](https://github.com/user-attachments/assets/cb4b6675-ba1b-4a4b-9bf3-719b9ca9f141)


### Key Highlights
- **Real-time Preview**: See your message template rendered instantly in a mobile-friendly interface
- **Flexible Header Options**: Support for text headers, image uploads, or no header
- **Interactive Buttons**: Add URL and phone call buttons with validation
- **Category Management**: Organize templates by business categories
- **Multi-language Support**: Template creation in multiple languages
- **JSON Export**: Generate structured data for integration with messaging APIs

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - Latest version with modern hooks and concurrent features
- **TypeScript** - Type-safe development with enhanced IDE support
- **Vite** - Fast build tool with hot module replacement (HMR)

### Styling & UI
- **Tailwind CSS 4.1** - Utility-first CSS framework with modern design tokens
- **Lucide React** - Beautiful, customizable SVG icons

### Development Tools
- **ESLint** - Code linting with React-specific rules
- **TypeScript ESLint** - Enhanced TypeScript linting
- **Vite Plugin React** - Optimized React integration

### State Management
- **React Context API** - Global state management for template data
- **Custom Hooks** - Reusable logic for template operations

## 🚀 Setup & Installation Instructions

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/sirSayed98/template-message
   cd template-message
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## ✨ Features and Usage

### 🎯 Core Features

#### 1. **Template Configuration**
- **Template Name**: Set a unique identifier for your message template
- **Language Selection**: Choose from supported languages for localization
- **Category Assignment**: Organize templates by business categories (Marketing, Support, etc.)

#### 2. **Header Customization**
- **Text Header**: Add formatted text headers with validation
- **Image Header**: Upload and preview images with drag-and-drop support
- **No Header**: Create clean, minimal templates without headers

#### 3. **Content Management**
- **Body Text**: Rich text input with character validation
- **Footer Text**: Optional footer text for additional information
- **Real-time Validation**: Instant feedback on content requirements

#### 4. **Interactive Buttons**
- **URL Buttons**: Add clickable links with custom text and validation
- **Call Buttons**: Include phone number buttons for direct calling
- **Multiple Buttons**: Support for multiple call-to-action buttons per template

#### 5. **Live Preview**
- **Mobile Interface**: Accurate representation of how messages appear on mobile devices
- **Real-time Updates**: Instant preview updates as you modify template content
- **Responsive Design**: Preview adapts to different screen sizes

### 🎮 How to Use

1. **Start Creating**: Enter a template name and select language/category
2. **Design Header**: Choose header type and add content (text/image)
3. **Add Body Content**: Write your main message content
4. **Configure Buttons**: Add URL or phone call buttons as needed
5. **Add Footer**: Include optional footer information
6. **Preview & Export**: Review in the mobile preview and export JSON structure

## 📁 Folder Structure Description

```
template-message/
├── public/                     # Static assets
│   └── vite.svg               # Vite logo
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── common/           # Shared components
│   │   │   ├── form-input-field.tsx      # Generic input component
│   │   │   ├── form-input-header.tsx     # Form section headers
│   │   │   ├── form-multi-select.tsx     # Multi-select dropdown
│   │   │   ├── form.css                  # Form-specific styles
│   │   │   └── tabs.tsx                  # Tab navigation component
│   │   ├── form/             # Form-related components
│   │   │   ├── header/       # Header configuration components
│   │   │   │   ├── header.tsx            # Main header component
│   │   │   │   ├── image-drag-drop.tsx   # Image upload with drag-drop
│   │   │   │   ├── image-preview.tsx     # Image preview component
│   │   │   │   ├── image-selection.tsx   # Image selection controls
│   │   │   │   └── image-uploader.tsx    # Image upload handler
│   │   │   ├── call-to-actions/          # Button configuration
│   │   │   │   ├── button-config.tsx     # Button configuration form
│   │   │   │   ├── call-to-actions-wrapper.tsx # CTA container
│   │   │   │   └── phone-number.tsx      # Phone number input
│   │   │   ├── body.tsx                  # Message body input
│   │   │   ├── buttons.tsx               # Button management
│   │   │   ├── category.tsx              # Category selection
│   │   │   ├── footer.tsx                # Footer input
│   │   │   ├── form-container.tsx        # Main form wrapper
│   │   │   └── templete-details.tsx      # Template metadata
│   │   ├── preview/          # Preview components
│   │   │   ├── messages-container.tsx    # Message preview container
│   │   │   ├── phone-wrapper.tsx         # Mobile phone mockup
│   │   │   └── preview-wrapper.tsx       # Preview section wrapper
│   │   ├── template-header.tsx           # App header component
│   │   ├── template-wrapper.tsx          # Main layout wrapper
│   │   └── templete-breadcrumb.tsx       # Navigation breadcrumb
│   ├── context/              # State management
│   │   ├── context.ts        # React context definition
│   │   ├── helper.ts         # Context helper functions
│   │   ├── interfaces.ts     # TypeScript interfaces
│   │   ├── reducer.ts        # State reducer logic
│   │   ├── state.tsx         # State provider component
│   │   ├── templateHook.ts   # Custom template hook
│   │   └── types.ts          # Type definitions
│   ├── pages/                # Page components
│   │   └── home.tsx          # Main application page
│   ├── utils/                # Utility functions
│   │   ├── getCurrentTime.ts # Time utility functions
│   │   └── validation-helper.ts # Form validation utilities
│   ├── App.tsx               # Root application component
│   ├── App.css               # Global application styles
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global CSS imports
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── tsconfig.app.json          # App-specific TypeScript config
├── tsconfig.node.json         # Node.js TypeScript config
└── vite.config.ts             # Vite build configuration
```

## 📋 Available Scripts and Commands

### Development Commands
```bash
# Start development server with hot reload
npm run dev

# Build application for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality checks
npm run lint
```

### Package Management
```bash
# Install all dependencies
npm install

# Add new dependency
npm install <package-name>

# Add development dependency
npm install -D <package-name>

# Update dependencies
npm update
```

### TypeScript Commands
```bash
# Type checking
npx tsc --noEmit

# Build TypeScript
npx tsc -b
```

## 🎨 Coding Conventions and Best Practices

### TypeScript Guidelines
- **Strict Type Checking**: All components use proper TypeScript interfaces
- **Interface Definitions**: Centralized in `src/context/interfaces.ts`
- **Type Exports**: Consistent type definitions across components
- **No Any Types**: Avoid `any` type, use proper type definitions

### React Best Practices
- **Functional Components**: Use modern functional components with hooks
- **Component Composition**: Break down complex components into smaller, reusable pieces
- **Custom Hooks**: Extract reusable logic into custom hooks (`templateHook.ts`)
- **Context API**: Use React Context for global state management

### File and Folder Naming
- **kebab-case**: Use for file and folder names (`form-input-field.tsx`)
- **PascalCase**: Use for component names and interfaces (`ButtonType`)
- **camelCase**: Use for variables and function names (`templateName`)

### Code Organization
- **Single Responsibility**: Each component has a clear, single purpose
- **Barrel Exports**: Use index files for clean imports where appropriate
- **Separation of Concerns**: Separate business logic, UI components, and utilities

### Styling Guidelines
- **Tailwind Classes**: Use utility-first approach with Tailwind CSS
- **Responsive Design**: Include responsive breakpoints (`lg:`, `md:`, `sm:`)
- **Component-level Styles**: Use CSS modules or styled-components for complex styling
- **Consistent Spacing**: Follow Tailwind's spacing scale

### State Management
- **Context Provider**: Wrap components with context providers at the appropriate level
- **Reducer Pattern**: Use reducers for complex state updates
- **Local State First**: Prefer local state over global state when possible
- **Immutable Updates**: Always create new objects/arrays when updating state

### Error Handling
- **Validation**: Implement form validation with clear error messages
- **Error Boundaries**: Use React error boundaries for production error handling
- **Type Safety**: Leverage TypeScript to catch errors at compile time

### Performance Considerations
- **Lazy Loading**: Implement code splitting for better performance
- **Memoization**: Use `React.memo`, `useMemo`, and `useCallback` appropriately
- **Bundle Size**: Keep dependencies minimal and tree-shakeable



---

**Happy Template Building!** 🚀
