                <form onSubmit={handleSubmit} className="flex flex-col gap-10 justify-center items-center w-full max-w-7xl px-4 md:px-8">
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                        {/* Colonne 1 */}
                        <div className="flex flex-col gap-5">
                            <Input label="Nom de famille" type="text" placeholder="Nom de famille" onChange={handleChange('name')} icon={<CiUser size={20} />} />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                            <Input label="Prénom" type="text" placeholder="Prénom" onChange={handleChange('surname')} icon={<CiUser size={20} />} />
                            {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}

                            <Input label="Carte Nationale d’Identité" type="text" placeholder="CNI" onChange={handleChange('CNI')} icon={<BiUserPin size={20} />} />
                            {errors.CNI && <p className="text-red-500 text-sm">{errors.CNI}</p>}

                            <Input label="Numéro de téléphone" type="text" placeholder="Numéro de téléphone" onChange={handleChange('phoneNumber')} icon={<BsTelephone size={20} />} />
                            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}



                            <Input label="Date de naissance" type="date" onChange={handleChange('birthDate')} icon={<BsFillCalendar2CheckFill size={20} />} />
                            {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate}</p>}
                        </div>

                        {/* Colonne 2 */}
                        <div className="flex flex-col gap-5">
                            <Input label="Profession" type="text" placeholder="Profession" onChange={handleChange('job')} icon={<SiLinuxprofessionalinstitute size={20} />} />
                            {errors.job && <p className="text-red-500 text-sm">{errors.job}</p>}

                            <Input label="Sexe" type="text" placeholder="Sexe (M/F)" onChange={handleChange('sex')} icon={<MdPeopleOutline size={20} />} />
                            {errors.sex && <p className="text-red-500 text-sm">{errors.sex}</p>}

                            <Input label="Nom du père" type="text" placeholder="Nom du père" onChange={handleChange('fathersName')} icon={<CiUser size={20} />} />
                            {errors.fathersName && <p className="text-red-500 text-sm">{errors.fathersName}</p>}

                            <Input label="Prénom du père" type="text" placeholder="Prénom du père" onChange={handleChange('fathersSurname')} icon={<CiUser size={20} />} />
                            {errors.fathersSurname && <p className="text-red-500 text-sm">{errors.fathersSurname}</p>}

                            <Input label="Nom de la mère" type="text" placeholder="Nom de la mère" onChange={handleChange('mothersName')} icon={<CiUser size={20} />} />
                            {errors.mothersName && <p className="text-red-500 text-sm">{errors.mothersName}</p>}
                        </div>

                        {/* Colonne 3 */}
                        <div className="flex flex-col gap-5">
                            <Input label="Prénom de la mère" type="text" placeholder="Prénom de la mère" onChange={handleChange('mothersSurname')} icon={<CiUser size={20} />} />
                            {errors.mothersSurname && <p className="text-red-500 text-sm">{errors.mothersSurname}</p>}

                            <div className="flex flex-col gap-5">
                                <label htmlFor="maritalStatus">État civil</label>
                                <select
                                    id="maritalStatus"
                                    value={formData.maritalStatus}
                                    onChange={(e) => handleChange('maritalStatus')(e.target.value)}
                                    className="border border-gray-300 p-2 rounded-md bg-[#F2F2F2]"
                                >
                                    <option value={MaritalStatus.SINGLE}>Célibataire</option>
                                    <option value={MaritalStatus.MARRIED}>Marié(e)</option>
                                    <option value={MaritalStatus.DIVORCED}>Divorcé(e)</option>
                                    <option value={MaritalStatus.WIDOWED}>Veuf(ve)</option>
                                </select>
                                {errors.maritalStatus && <p className="text-red-500 text-sm">{errors.maritalStatus}</p>}
                            </div>


                            <Input label="Adresse" type="text" placeholder="Adresse" onChange={handleChange('address')} icon={<IoLocationOutline size={20} />} />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

                            <Input label="Pays de naissance" type="text" placeholder="Pays de naissance" onChange={handleChange('birthCountry')} icon={<CiHome size={20} />} />
                            {errors.birthCountry && <p className="text-red-500 text-sm">{errors.birthCountry}</p>}

                            <Input label="Département de naissance" type="text" placeholder="Département de naissance" onChange={handleChange('birthDepartment')} icon={<CiHome size={20} />} />
                            {errors.birthDepartment && <p className="text-red-500 text-sm">{errors.birthDepartment}</p>}
                        </div>
                    </div>

                    {/* Mot de passe et confirmation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <div className="flex flex-col">
                            <Input label="Mot de passe" type="password" placeholder="Mot de passe" onChange={handleChange('password')} icon={<CiLock size={20} />} />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>

                        <div className="flex flex-col">
                            <Input label="Confirmer le mot de passe" type="password" placeholder="Confirmer le mot de passe" onChange={handleChange('confirmPassword')} icon={<CiLock size={20} />} />
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                        </div>
                    </div>

                    {/* Recapcha */}
                    <ReCAPTCHA sitekey={ReCaptChaKEY} onChange={onChange} />
                    {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}

                    {/* Bouton de soumission */}
                    <Button disabled={loading} className="bg-[#00AF41] text-white w-full h-14 md:w-[300px] mb-10 rounded-full cursor-pointer" label={loading ? <BiLoaderCircle size={20} className="animate-spin" /> : "Créer un compte"} />
                </form>
