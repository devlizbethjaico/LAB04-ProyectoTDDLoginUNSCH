// =============================================================================
// login.test.js — FASE 🔴 RED (TDD)
// HU-001: Inicio de Sesión al Portal UNSCH
//
// Ejecuta 'npm test' → verás FAIL en rojo ❌  (correcto en TDD)
// Luego crea src/auth/login.js → todo en verde ✅
// =============================================================================

const { validarLogin, iniciarSesion } = require('../../src/auth/Login');

const DB = {
  '2021100001': { password: 'Unsch2024!', nombre: 'Ana Torres', rol: 'estudiante' },
};

describe('Login UNSCH', () => {

  test('CA-01: login correcto', () => {
    const r = iniciarSesion('2021100001', 'Unsch2024!', DB);
    expect(r.exito).toBe(true);
    expect(r.mensaje).toContain('Ana Torres');
    expect(r.rol).toBe('estudiante');
  });

  test('CA-02: usuario vacío', () => {
    const r = validarLogin('', 'Unsch2024!');
    expect(r.exito).toBe(false);
    expect(r.mensaje).toBe('El usuario es requerido');
  });

  test('CA-03: contraseña vacía', () => {
    const r = validarLogin('2021100001', '');
    expect(r.exito).toBe(false);
    expect(r.mensaje).toBe('La contraseña es requerida');
  });

  test('CA-04: código inválido — 9 dígitos', () => {
    const r = validarLogin('123456789', 'Unsch2024!');
    expect(r.exito).toBe(false);
    expect(r.mensaje).toBe('Formato de código inválido');
  });

  test('CA-05: credenciales incorrectas', () => {
    const r = iniciarSesion('2021100001', 'Mal!', DB);
    expect(r.exito).toBe(false);
    expect(r.mensaje).toBe('Credenciales incorrectas');
  });

 
});