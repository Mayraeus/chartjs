import random
import tkinter as tk
from tkinter import messagebox

def obtener_opcion_maquina():
    return random.randint(1, 5)

def convertir_numero_a_opcion(numero):
    opciones = {1: "Piedra", 2: "Papel", 3: "Tijeras", 4: "Lagarto", 5: "Spock"}
    return opciones[numero]

def determinar_ganador(usuario, maquina):
    if usuario == maquina:
        return "Empate"
    elif (usuario == 1 and (maquina == 3 or maquina == 4)) or \
         (usuario == 2 and (maquina == 1 or maquina == 5)) or \
         (usuario == 3 and (maquina == 2 or maquina == 4)) or \
         (usuario == 4 and (maquina == 2 or maquina == 5)) or \
         (usuario == 5 and (maquina == 1 or maquina == 3)):
        return "Ganaste"
    else:
        return "Perdiste"

def jugar(opcion_usuario):
    opcion_maquina = obtener_opcion_maquina()
    resultado = determinar_ganador(opcion_usuario, opcion_maquina)
    mensaje = f"Tu elección: {convertir_numero_a_opcion(opcion_usuario)}\n"
    mensaje += f"La máquina eligió: {convertir_numero_a_opcion(opcion_maquina)}\n"
    mensaje += f"¡{resultado}!"
    messagebox.showinfo("Resultado", mensaje)

def piedra():
    jugar(1)

def papel():
    jugar(2)

def tijeras():
    jugar(3)

def lagarto():
    jugar(4)

def spock():
    jugar(5)

# Crear la ventana principal
ventana = tk.Tk()
ventana.title("Piedra, papel, tijeras, lagarto, Spock")

# Botones para cada opción
boton_piedra = tk.Button(ventana, text="Piedra", command=piedra)
boton_piedra.pack()

boton_papel = tk.Button(ventana, text="Papel", command=papel)
boton_papel.pack()

boton_tijeras = tk.Button(ventana, text="Tijeras", command=tijeras)
boton_tijeras.pack()

boton_lagarto = tk.Button(ventana, text="Lagarto", command=lagarto)
boton_lagarto.pack()

boton_spock = tk.Button(ventana, text="Spock", command=spock)
boton_spock.pack()

# Ejecutar la ventana
ventana.mainloop()
