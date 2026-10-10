// Tipovi za tracking skripte koje GTM ubacuje na stranicu. Bez ovoga je svaki
// window.dataLayer.push morao ići kroz @ts-ignore (75 mjesta).
export {};

declare global {
    interface Window {
        dataLayer?: Record<string, unknown>[];
        gtag?: (...args: unknown[]) => void;
        // Iz inline loadera u app/layout.tsx: doda Clarity tag jednom, samo uz pristanak
        slaufLoadClarity?: () => void;
    }
}
