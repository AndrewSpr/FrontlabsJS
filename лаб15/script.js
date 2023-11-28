// Використання finally

function exampleWithFinally() {
    try {
      console.log("Виконання коду");
      // Штучно генеруємо помилку
      throw new Error("Приклад помилки");
    } catch (err) {
      console.error("Обробка помилки:", err.message);
    } finally {
      console.log("Очищення ресурсів");
    }
  }
  
  // Виклик прикладу
  exampleWithFinally();

  /* У цьому випадку, навіть якщо виникає помилка у блоку try, код у finally виконається. Це корисно, наприклад, для звільнення ресурсів, навіть якщо сталася помилка. */
  
  // Без використання finally

function exampleWithoutFinally() {
    try {
      console.log("Виконання коду");
      // Штучно генеруємо помилку
      throw new Error("Приклад помилки");
    } catch (err) {
      console.error("Обробка помилки:", err.message);
    }
    // Очищення ресурсів поза блоком try...catch
    console.log("Очищення ресурсів");
  }
  
  // Виклик прикладу
  exampleWithoutFinally();
  

/* У цьому випадку код очищення ресурсів викликається тільки у випадку, якщо помилка не виникає. Якщо помилка виникає, код поза блоком catch не виконується. */