const formatObject = (obj: any, format: string): string => {
  const keys = format.split(' - ');

  const values = keys.map((key) => {
    if (key in obj) {
      return obj[key];
    } else {
      throw new Error(`Key "${key}" not found in the object.`);
    }
  });

  return values.join(' - ');
};

export default formatObject;
