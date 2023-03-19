// Settings — настройки моего приложения
interface Settings {
  // название приложения
  appName: string;
  // порт для запуска сервера
  appPort: string;
}

function mustInitSettings(): Settings {
  return {
    appName: "myApp",
    appPort: "8080",
  };
}

export { mustInitSettings };
