interface ButtonTypes {
  /**
   * Label to display
   */
  caption: string;

  // color to be shown in the button background
  color: string;
  
  /**
   * Primary button use case
   */
  primary: boolean;

  /**
   * How large can my button be?
   */
  size?: "small" | "medium" | "large";
}

export default ButtonTypes;
