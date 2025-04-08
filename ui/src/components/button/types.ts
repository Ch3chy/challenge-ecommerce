export interface ButtonProps {
  /** El contenido que se mostrará dentro del botón. */
  children: React.ReactNode;

  /** El estilo visual del botón. */
  variant?: "primary" | "secondary" | "success" | "normal";

  /** El tamaño del botón. */
  size?: "sm" | "md" | "lg";

  /** Si es verdadero, el botón ocupará todo el ancho de su contenedor. */
  fullWidth?: boolean;

  /** Si es verdadero, el botón estará deshabilitado. */
  disabled?: boolean;

  /** Clases CSS adicionales para aplicar al botón. */
  className?: string;

  /** Función que se ejecutará cuando se haga clic en el botón. */
  onClick?: VoidFunction;
}
