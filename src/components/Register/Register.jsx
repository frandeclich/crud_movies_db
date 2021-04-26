import React, { useState } from 'react';
import Button from '../Button'
import input from '../Input'

const Register = (className) => {
    return (
        <div className={`container p-4 d-flex justify-content-center ${className}`}>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
                <div className="col-12 col-md-9">
                    <h3 className="text-center pb-3">Regístrate</h3>
                </div>
                <div className="col-12 col-md-9">
                    <form action="" onSubmit="">
                        <Input
                            className="col-12"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                        <Input
                            className="col-12"
                            name="pass"
                            type="password"
                            placeholder="Contraseña"
                        />
                        <Button
                            type='submit'
                            text='ENVIAR'
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}