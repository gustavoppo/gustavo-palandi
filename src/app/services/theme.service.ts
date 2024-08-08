import { effect, Injectable, signal, WritableSignal, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export const storageKey = 'theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  #path: string = '/assets/themes';
  #stylesheet: HTMLLinkElement | null;

  themeSignal: WritableSignal<string> = signal<string>('dark');

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {
    this.#stylesheet = isPlatformBrowser(this.platformId) ? this.document.getElementById('theme') as HTMLLinkElement : null;

    this.initializeThemeFromPreferences();

    effect(() => {
      this.updateRenderedTheme();
    });
  }

  toggleTheme(): void {
    this.themeSignal.update((prev) =>
      this.isDarkThemeActive() ? 'dark' : 'light'
    );
  }

  private initializeThemeFromPreferences(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.#stylesheet) {
        this.initializeStylesheet();
      }

      const storedTheme = localStorage.getItem(storageKey);

      if (storedTheme) {
        this.themeSignal.update(() => storedTheme);
      }
    }
  }

  private initializeStylesheet(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.#stylesheet = this.document.createElement('link');
      this.#stylesheet.id = 'theme';
      this.#stylesheet.rel = 'stylesheet';

      this.document.head.appendChild(this.#stylesheet);
    }
  }

  getToggleLabel(): string {
    return `Switch to ${this.isDarkThemeActive() ? 'dark' : 'light'} mode`;
  }

  isDarkThemeActive(): boolean {
    return this.themeSignal() === 'light' ? true : false;
  }

  private updateRenderedTheme(): void {
    if (isPlatformBrowser(this.platformId) && this.#stylesheet) {
      this.#stylesheet.href = `${this.#path}/${this.themeSignal()}.css`;
      localStorage.setItem(storageKey, this.themeSignal());
    }
  }
}
