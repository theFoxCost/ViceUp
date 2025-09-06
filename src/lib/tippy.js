import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export function tooltip(node, options) {
  // Initialize Tippy
  const instance = tippy(node, options);

  return {
    update(newOptions) {
      instance.setProps(newOptions);
    },
    destroy() {
      instance.destroy();
    }
  };
}
