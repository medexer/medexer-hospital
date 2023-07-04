// Prevents additional console window on Windows in release, DO NOT REMOVE!!

#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
use tauri::{utils::config::AppUrl, window::WindowBuilder, WindowUrl};

fn main() {
  // build
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");

  // enable dev tools
  tauri::Builder::default()
    .setup(|app| {
      #[cfg(debug_assertions)] // only include this code on debug builds
      {
        let window = app.get_window("main").unwrap();
        window.open_devtools();
        window.close_devtools();
      }
      Ok(())
  });

  // tauri.localhost config
  let port = portpicker::pick_unused_port().expect("failed to find unused port");

  let mut context = tauri::generate_context!();
  let url = format!("http://localhost:{}", port).parse().unwrap();
  let window_url = WindowUrl::External(url);
  // rewrite the config so the IPC is enabled on this URL
  context.config_mut().build.dist_dir = AppUrl::Url(window_url.clone());

  tauri::Builder::default()
    .plugin(tauri_plugin_localhost::Builder::new(port).build())
    .setup(move |app| {
      WindowBuilder::new(
        app,
        "main".to_string(),
        if cfg!(dev) {
          Default::default()
        } else {
          window_url
        }
      )
      .title("Localhost Example")
      .build()?;
      Ok(())
    })
    .run(context)
    .expect("error while running tauri application");
}
