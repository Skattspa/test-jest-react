const text = 'Hola Mundo';
const fruits = ['manzana', 'plátano', 'banana', 'sandía', 'melón']
test('Debe contener un texto', ()=>{
    expect(text).toMatch(/Mundo/);
});

test('¿Tenemos una banana', ()=>{
    expect(fruits).toContain('banana');
});

test('Mayor que ', ()=>{
    expect(10).toBeGreaterThan(9);
});

test('Verdadero',()=>{
    expect(true).toBeTruthy();
});

const reverseString = (str,callback)=>{
    callback(str.split("").reverse().join(""))
};

test('probar un callback',()=>{
    reverseString('Hola',(str)=>{
        expect(str).toBe('aloH');
    })
});

const reverseStringDos = str =>{
    return new Promise((resolve,reject)=>{
        if(!str){
            reject(Error('Error'));
        }
        resolve(str.split("").reverse().join(""))
    })
};

test('Probar una promesa', ()=>{
    return reverseStringDos('Hola').then(
        string=>{
            expect(string).toBe('aloH');
        }
    )
})

test('Probar async/await', async ()=>{
    const string = await reverseStringDos('hola');
    expect(string).toBe('aloh');
})

afterEach(()=>{
    console.log('Despues de cada prueba');
})
afterAll(()=>{
    console.log('Deespues de todas las pruebas')
})

beforeEach(()=>{
    console.log('Antes de cada prueba');
})

beforeAll(()=>{
    console.log('Antes de todas las pruebas');
})