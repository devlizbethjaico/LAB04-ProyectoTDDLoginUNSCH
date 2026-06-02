# LAB04 - Proyecto TDD: Login Portal UNSCH con Jest

## Objetivo

Aplicar la metodología **TDD (Test Driven Development)** utilizando **Jest**, desarrollando las pruebas unitarias para la funcionalidad de inicio de sesión del Portal Académico de la UNSCH a partir de una Historia de Usuario y sus Criterios de Aceptación.

---

## Metodología TDD

Antes de programar cualquier funcionalidad, se deben escribir las pruebas unitarias.

### Flujo de trabajo obligatorio

| Paso | Acción                 | Resultado Esperado                   |
| ---- | ---------------------- | ------------------------------------ |
| 1    | Crear `login.test.js`  | Se definen las pruebas               |
| 2    | Ejecutar `npm test`    | Las pruebas fallan ❌                 |
| 3    | Implementar `login.js` | Código mínimo necesario              |
| 4    | Ejecutar `npm test`    | Las pruebas pasan ✅                  |
| 5    | Refactorizar           | Mejorar el código sin romper pruebas |

### Ciclo TDD

```text
RED ❌ → GREEN ✅ → REFACTOR 🔄
```

---

# Historia de Usuario

## HU-001: Inicio de Sesión al Portal UNSCH

**Como** estudiante o docente de la Universidad Nacional de San Cristóbal de Huamanga (UNSCH),

**Quiero** iniciar sesión utilizando mi código institucional y contraseña,

**Para** acceder de forma segura a los servicios académicos disponibles en el portal institucional, tales como matrícula, consulta de notas, sílabos y trámites académicos.

---

# Criterios de Aceptación

| Código | Descripción                                                                    |
| ------ | ------------------------------------------------------------------------------ |
| CA-01  | Permitir el acceso cuando el código institucional y la contraseña sean válidos |
| CA-02  | Mostrar mensaje de validación cuando el código institucional esté vacío        |
| CA-03  | Mostrar mensaje de validación cuando la contraseña esté vacía                  |
| CA-04  | Validar que el código institucional tenga exactamente 10 dígitos numéricos     |
| CA-05  | Mostrar mensaje de error cuando las credenciales sean incorrectas              |
---


Al finalizar el laboratorio, el estudiante será capaz de:

* Interpretar Historias de Usuario.
* Convertir Criterios de Aceptación en pruebas unitarias.
* Aplicar correctamente TDD.
* Utilizar Jest para automatizar pruebas.
* Implementar una funcionalidad guiada por pruebas.
* Mantener trazabilidad entre requisitos y pruebas.

```
```
