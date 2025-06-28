# React Vite Template

Чистый шаблон для React приложений с TypeScript, Vite и React Router.

## Особенности

- ⚡ **Vite** - быстрая сборка и разработка
- ⚛️ **React 19** - современная версия React
- 🔷 **TypeScript** - типизация из коробки
- 🗂️ **React Router** - клиентский роутинг
- 🎨 **CSS Modules** - изолированные стили компонентов
- 📁 **Модульная структура** - каждый компонент в своей папке
- 🧹 **Чистый код** - готов для адаптации под любой проект

## Структура проекта

```
src/
├── components/           # Переиспользуемые компоненты
│   ├── Header/          
│   │   ├── Header.tsx    # Компонент шапки
│   │   └── Header.module.css
│   ├── Footer/          
│   │   ├── Footer.tsx    # Компонент подвала
│   │   └── Footer.module.css
│   └── Layout/          
│       ├── Layout.tsx    # Основной layout
│       └── Layout.module.css
├── pages/               # Страницы приложения
│   ├── Home/           
│   │   ├── Home.tsx      # Главная страница (пустая)
│   │   └── Home.module.css
│   └── About/          
│       ├── About.tsx     # Страница "О нас" (пустая)  
│       └── About.module.css
├── App.tsx              # Основной компонент с роутингом
├── main.tsx             # Точка входа
└── index.css            # Глобальные стили с CSS переменными
```

## Использование

1. **Клонирование:**
   ```bash
   git clone <repo-url>
   cd your-project
   ```

2. **Установка зависимостей:**
   ```bash
   npm install
   ```

3. **Запуск разработки:**
   ```bash
   npm run dev
   ```

4. **Сборка для продакшена:**
   ```bash
   npm run build
   ```

## Кастомизация под проект

### 1. CSS переменные

Измените цвета и размеры в `src/index.css`:

```css
:root {
  /* Цвета - замените под свой проект */
  --color-primary: #646cff;     /* Основной цвет */
  --color-secondary: #f9f9f9;   /* Вторичный цвет */
  --color-text: #213547;        /* Цвет текста */
  --color-background: #ffffff;  /* Фон */
  
  /* Отступы */
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
}
```

### 2. Контент страниц

Страницы намеренно пустые. Добавьте свой контент:

**Home page** (`src/pages/Home/Home.tsx`):
```tsx
return (
  <div className={styles.page}>
    <h1>Главная</h1>
    {/* Ваш контент */}
  </div>
)
```

### 3. Навигация

Обновите навигацию в `src/components/Header/Header.tsx`:
```tsx
<div className={styles.navLinks}>
  <Link to="/">Главная</Link>
  <Link to="/about">О нас</Link>
  {/* Добавьте свои ссылки */}
</div>
```

### 4. Новые страницы

1. **Создайте папку:**
   ```
   src/pages/NewPage/
   ├── NewPage.tsx
   └── NewPage.module.css
   ```

2. **Добавьте роут в `App.tsx`:**
   ```tsx
   <Route path="new-page" element={<NewPage />} />
   ```

3. **Добавьте в навигацию**

## Принципы организации

### CSS Modules
- Каждый компонент имеет свой `.module.css` файл
- Стили изолированы: `className={styles.myClass}`
- Используйте camelCase для имен классов

### Компоненты
- Каждый компонент в отдельной папке
- TSX файл + CSS Module файл
- Экспорт по умолчанию

### Страницы
- Чистые, готовые для наполнения контентом
- Базовая структура с `.page` классом
- CSS переменные для единообразия

## Что готово к использованию

✅ **Роутинг** - настроен React Router  
✅ **Компоненты** - Header, Footer, Layout  
✅ **Стили** - CSS Modules + переменные  
✅ **TypeScript** - полная типизация  
✅ **Структура** - масштабируемая архитектура  
✅ **Чистые страницы** - готовы для контента  

## Команды

- `npm run dev` - запуск разработки
- `npm run build` - сборка проекта
- `npm run preview` - предпросмотр сборки
- `npm run lint` - проверка кода

Теперь просто склонируйте, измените CSS переменные и добавьте свой контент!
