export const PI = 3.14159;  // phải export thì ms import ở ngoài đc
export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * (radius**2);
}

export function getVolume(radius){
    return (4/3) * PI * (radius**3);
}
