import { check, Generator, property } from 'testcheck';

declare const it: any;

export interface Options {
  times?: number;
  maxSize?: number;
  seed?: number;
}

export const testcheck = {
  it: (testDescription: string, generators: Generator<any>[], testFunction: any, options?: Options) => {
    let i = 1;
    let propertyInstance;
    if (generators.length === 1) {
      propertyInstance = property(generators[0], (...args: any[]) => {
        it(testDescription + " " + i++, () => {
          testFunction(...args);
        });
        return true;
      });
    } else if (generators.length === 2) {
      propertyInstance = property(generators[0], generators[1], (...args: any[]) => {
        it(testDescription + " " + i++, () => {
          testFunction(...args);
        });
        return true;
      });
    } else if (generators.length === 3) {
      propertyInstance = property(generators[0], generators[1], generators[2], (...args: any[]) => {
        it(testDescription + " " + i++, () => {
          testFunction(...args);
        });
        return true;
      });
    } else if (generators.length === 4) {
      propertyInstance = property(generators[0], generators[1], generators[2], generators[3], (...args: any[]) => {
        it(testDescription + " " + i++, () => {
          testFunction(...args);
        });
        return true;
      });
    } else {
      throw new Error('invalid generators');
    }

    check(propertyInstance, (options || { times: 5 }));
  },
};
