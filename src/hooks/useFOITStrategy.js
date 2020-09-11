import { useEffect } from 'react';

// Use a system font until our custom font is fully loaded in order to avoid
// FOIT (Flash of Invisible Text)
const useFOITStrategy = () => {
  useEffect(() => {
    Promise.all([
      '400 Greycliff CF',
      'italic 400 Greycliff CF',
      '500 Greycliff CF',
      'italic 500 Greycliff CF',
      '600 Greycliff CF',
      'italic 600 Greycliff CF',
    ]).then(() => {
      document.body.classList.add('has-custom-font');
    });
  }, []);
};

export default useFOITStrategy;
