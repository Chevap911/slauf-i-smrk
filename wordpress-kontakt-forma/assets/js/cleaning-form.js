"use client"

import React from "react"
import ReactDOM from "react-dom/client"
;(() => {
  // Provjeri da li su React i ReactDOM dostupni
  if (typeof React === "undefined" || typeof ReactDOM === "undefined") {
    console.error("React ili ReactDOM nisu učitani")
    return
  }

  const { useState, useEffect, useCallback } = React
  const { motion, AnimatePresence } = window.FramerMotion || {}

  // Fallback ako Framer Motion nije dostupan
  const Motion = motion || "div"
  const AnimatePresenceComponent = AnimatePresence || React.Fragment

  // Window sizes in square meters
  const WINDOW_SIZES = {
    small: 1.2,
    double: 2.4,
  }

  const FLOOR_HEIGHT = 3

  const PRICE_FACTORS = {
    facadeCondition: {
      1: 6,
      2: 5.5,
      3: 5,
      4: 4.5,
      5: 4,
    },
    yardCondition: {
      1: 3,
      2: 2.75,
      3: 2.5,
      4: 2.25,
      5: 2,
    },
    poolSize: {
      small: 400,
      medium: 600,
      large: 800,
    },
    poolType: {
      standard: 1,
      saltwater: 1.2,
      infinity: 1.3,
    },
    discount: {
      firstTime: 0.15,
    },
    carWash: 25,
  }

  const FUN_FACTS = [
    "Jeste li znali da visokotlačno čišćenje može uštedjeti do 80% vode u usporedbi s tradicionalnim metodama čišćenja?",
    "Redovito čišćenje fasade može produžiti njen životni vijek za 10-15 godina!",
    "Alge i plijesan na fasadi mogu smanjiti energetsku učinkovitost vašeg doma za čak 30%.",
    "Čišćenje fasade može povećati vrijednost nekretnine za 5-10%.",
    "Visokotlačno čišćenje može ukloniti i do 99.9% bakterija i plijesni s površina.",
    "Prosječna kuća u Hrvatskoj ima oko 150-200 m² fasadne površine.",
    "Čista fasada može smanjiti troškove grijanja i hlađenja za 15-20%.",
    "Profesionalno čišćenje fasade traje u prosjeku 1-2 dana za prosječnu obiteljsku kuću.",
    "Visokotlačni perači mogu proizvesti pritisak od 100 do 200 bara, što je dovoljno za uklanjanje i najtvrđe prljavštine.",
    "Impregnacija fasade nakon čišćenja može pružiti zaštitu od prljavštine i do 5 godina.",
  ]

  const SERVICE_TYPES = [
    {
      id: "facade",
      name: "Čišćenje fasade",
      description: "Profesionalno čišćenje i održavanje fasade vašeg objekta",
    },
    {
      id: "pool",
      name: "Pranje bazena",
      description: "Temeljito čišćenje i održavanje bazena",
    },
    {
      id: "yard",
      name: "Čišćenje okućnice",
      description: "Uređenje i čišćenje vanjskog prostora",
    },
    {
      id: "complete",
      name: "Kompletna usluga",
      description: "Kombinacija svih usluga za potpuno čišćenje",
    },
  ]

  // Simple Button component
  const Button3D = ({ children, onClick, className = "", type = "button", disabled = false }) =>
    React.createElement(
      "button",
      {
        onClick: onClick,
        className: `relative rounded-xl overflow-hidden group bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold py-3 px-6 shadow-lg hover:shadow-xl active:shadow-md transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed ${className}`,
        type: type,
        disabled: disabled,
        style: {
          transform: disabled ? "none" : "translateY(0)",
          boxShadow: disabled ? "none" : "0 8px 0 rgb(30,64,175)",
        },
      },
      children,
    )

  // Simple Card component
  const Card3D = ({ children, className = "" }) =>
    React.createElement(
      "div",
      {
        className: `relative rounded-xl overflow-hidden bg-white border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`,
      },
      children,
    )

  function CleaningServiceForm() {
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(0)
    const [selectedService, setSelectedService] = useState("facade")
    const [adjustedArea, setAdjustedArea] = useState("")
    const [totalFacadeArea, setTotalFacadeArea] = useState(0)
    const [estimatedPrice, setEstimatedPrice] = useState(null)
    const [discountApplied, setDiscountApplied] = useState(true)
    const [randomFact, setRandomFact] = useState("")
    const [showConfetti, setShowConfetti] = useState(false)
    const [hasPool, setHasPool] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [formData, setFormData] = useState({
      email: "",
      address: "",
      name: "",
      phone: "",
      city: "",
      postalCode: "",
      message: "",
      floors: 0,
      windowsSmall: 0,
      windowsDouble: 0,
      balconyType: "",
      balconyCount: 0,
      buildingWidth: "",
      buildingLength: "",
      facadeCondition: 3,
      facadeSides: 4,
      yardSquareMeters: "",
      yardCondition: 3,
      hasPlants: false,
      hasTrees: false,
      poolSize: "medium",
      poolType: "standard",
      poolLastCleaned: "",
      cleanYard: false,
      carWash: false,
    })

    useEffect(() => {
      setRandomFact(FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)])
    }, [step])

    const calculateFacadeTotalArea = useCallback(() => {
      const buildingHeight = (formData.floors + 1) * FLOOR_HEIGHT

      if (formData.buildingWidth && formData.buildingLength) {
        const width = Number(formData.buildingWidth)
        const length = Number(formData.buildingLength)

        let totalFacadeArea = 0

        if (formData.facadeSides >= 1) {
          totalFacadeArea += width * buildingHeight
        }
        if (formData.facadeSides >= 2) {
          totalFacadeArea += width * buildingHeight
        }
        if (formData.facadeSides >= 3) {
          totalFacadeArea += length * buildingHeight
        }
        if (formData.facadeSides >= 4) {
          totalFacadeArea += length * buildingHeight
        }

        return totalFacadeArea
      }

      return 0
    }, [formData.floors, formData.buildingWidth, formData.buildingLength, formData.facadeSides])

    useEffect(() => {
      const facadeArea = calculateFacadeTotalArea()
      setTotalFacadeArea(facadeArea)
    }, [
      formData.floors,
      formData.buildingWidth,
      formData.buildingLength,
      formData.facadeSides,
      calculateFacadeTotalArea,
    ])

    useEffect(() => {
      if (totalFacadeArea > 0) {
        const totalWindowArea =
          formData.windowsSmall * WINDOW_SIZES.small + formData.windowsDouble * WINDOW_SIZES.double
        const balconyArea = formData.balconyType === "outer" ? formData.balconyCount * 4 : 0
        const adjusted = Math.max(0, totalFacadeArea - totalWindowArea + balconyArea)
        setAdjustedArea(adjusted.toFixed(2))
      }
    }, [totalFacadeArea, formData.windowsSmall, formData.windowsDouble, formData.balconyType, formData.balconyCount])

    useEffect(() => {
      let minPrice = 0
      let maxPrice = 0
      let yardPrice = undefined
      let poolPrice = undefined
      let carWashPrice = undefined

      if ((selectedService === "facade" || selectedService === "complete") && adjustedArea) {
        const area = Number.parseFloat(adjustedArea)
        const conditionFactor = PRICE_FACTORS.facadeCondition[formData.facadeCondition] || 3.5
        const baseMinPrice = area * conditionFactor
        const baseMaxPrice = baseMinPrice * 1.2
        const discountFactor = discountApplied ? 1 - PRICE_FACTORS.discount.firstTime : 1
        minPrice = Math.round(baseMinPrice * discountFactor)
        maxPrice = Math.round(baseMaxPrice * discountFactor)
      }

      if (selectedService === "yard" || selectedService === "complete" || formData.cleanYard) {
        if (formData.yardSquareMeters) {
          const yardArea = Number(formData.yardSquareMeters)
          const yardConditionFactor = PRICE_FACTORS.yardCondition[formData.yardCondition] || 2
          let complexityFactor = 1
          if (formData.hasPlants) complexityFactor += 0.1
          if (formData.hasTrees) complexityFactor += 0.15
          const baseYardPrice = Math.round(yardArea * yardConditionFactor * complexityFactor)
          const discountFactor = discountApplied ? 1 - PRICE_FACTORS.discount.firstTime : 1
          yardPrice = Math.round(baseYardPrice * discountFactor)

          if (selectedService === "yard") {
            minPrice = yardPrice
            maxPrice = Math.round(yardPrice * 1.2)
            yardPrice = undefined
          }
        }
      }

      if (selectedService === "pool" || (selectedService === "complete" && hasPool)) {
        const basePoolPrice = PRICE_FACTORS.poolSize[formData.poolSize] || 600
        const poolTypeFactor = PRICE_FACTORS.poolType[formData.poolType] || 1
        const calculatedPoolPrice = Math.round(basePoolPrice * poolTypeFactor)
        const discountFactor = discountApplied ? 1 - PRICE_FACTORS.discount.firstTime : 1
        poolPrice = Math.round(calculatedPoolPrice * discountFactor)

        if (selectedService === "pool") {
          minPrice = poolPrice
          maxPrice = poolPrice
          poolPrice = undefined
        }
      }

      if (formData.carWash) {
        carWashPrice = PRICE_FACTORS.carWash
      }

      setEstimatedPrice({ min: minPrice, max: maxPrice, yardPrice, poolPrice, carWashPrice })
    }, [
      selectedService,
      adjustedArea,
      formData.facadeCondition,
      formData.yardSquareMeters,
      formData.yardCondition,
      formData.hasPlants,
      formData.hasTrees,
      formData.poolSize,
      formData.poolType,
      formData.cleanYard,
      formData.carWash,
      discountApplied,
      hasPool,
    ])

    const updateFormData = (field, value) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleNext = () => {
      if (step === 1 && !formData.email) {
        alert("Email adresa je obavezna!")
        return
      }

      const newStep = step + 1
      setStep(newStep)
      const totalSteps = 3
      setProgress(Math.min(100, (newStep / totalSteps) * 100))
    }

    const handleBack = () => {
      const newStep = step - 1
      setStep(newStep)
      setProgress(Math.max(0, (newStep / 3) * 100))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsSubmitting(true)

      try {
        const submitData = {
          ...formData,
          selectedService,
          estimatedPrice,
          adjustedArea: Number.parseFloat(adjustedArea) || 0,
          hasPool,
        }

        const response = await fetch(cleaningFormAjax.resturl + "submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-WP-Nonce": cleaningFormAjax.nonce,
          },
          body: JSON.stringify(submitData),
        })

        const result = await response.json()

        if (result.success) {
          setStep(4)
          setProgress(100)
          setShowConfetti(true)

          setTimeout(() => {
            setShowConfetti(false)
          }, 5000)
        } else {
          alert("Greška: " + result.message)
        }
      } catch (error) {
        console.error("Error:", error)
        alert("Greška pri slanju forme. Molimo pokušajte ponovo.")
      } finally {
        setIsSubmitting(false)
      }
    }

    const FunFactBox = () =>
      React.createElement(
        "div",
        {
          className:
            "bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-4 my-6 relative overflow-hidden",
        },
        [
          React.createElement("div", {
            key: "bg1",
            className: "absolute -right-10 -bottom-10 w-32 h-32 bg-blue-200 rounded-full opacity-20",
          }),
          React.createElement("div", {
            key: "bg2",
            className: "absolute right-0 bottom-0 w-16 h-16 bg-yellow-200 rounded-full opacity-30",
          }),
          React.createElement(
            "div",
            {
              key: "content",
              className: "flex items-start relative z-10",
            },
            [
              React.createElement(
                "div",
                {
                  key: "icon",
                  className: "mr-3 mt-1 text-yellow-500",
                },
                "💡",
              ),
              React.createElement("div", { key: "text" }, [
                React.createElement(
                  "h4",
                  {
                    key: "title",
                    className: "font-medium text-blue-700 mb-1",
                  },
                  "Jeste li znali?",
                ),
                React.createElement(
                  "p",
                  {
                    key: "fact",
                    className: "text-sm text-blue-600",
                  },
                  randomFact,
                ),
              ]),
            ],
          ),
        ],
      )

    // Step 1: Contact Info
    const renderContactInfo = () =>
      React.createElement("div", { className: "space-y-6" }, [
        React.createElement(
          "div",
          {
            key: "header",
            className: "text-center mb-6",
          },
          [
            React.createElement(
              "h2",
              {
                key: "title",
                className:
                  "text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-2",
              },
              "Dobrodošli!",
            ),
            React.createElement(
              "p",
              {
                key: "subtitle",
                className: "text-blue-600",
              },
              "Unesite osnovne podatke za nastavak",
            ),
          ],
        ),

        React.createElement(
          "div",
          {
            key: "content",
            className: "space-y-6 relative",
          },
          [
            React.createElement(
              Card3D,
              {
                key: "contact-card",
                className: "p-6 relative z-10",
              },
              [
                React.createElement(
                  "div",
                  {
                    key: "email-field",
                    className: "relative z-10",
                  },
                  [
                    React.createElement(
                      "label",
                      {
                        key: "email-label",
                        htmlFor: "email",
                        className: "text-lg font-medium text-blue-700 flex items-center",
                      },
                      [
                        "Email ",
                        React.createElement(
                          "span",
                          {
                            key: "required",
                            className: "text-red-500 ml-1",
                          },
                          "*",
                        ),
                      ],
                    ),
                    React.createElement("input", {
                      key: "email-input",
                      id: "email",
                      type: "email",
                      placeholder: "vas@email.com",
                      value: formData.email,
                      onChange: (e) => updateFormData("email", e.target.value),
                      className:
                        "mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl w-full px-4",
                      required: true,
                    }),
                    React.createElement(
                      "p",
                      {
                        key: "email-note",
                        className: "text-xs text-gray-500 mt-1",
                      },
                      "Obavezno polje",
                    ),
                  ],
                ),

                React.createElement(
                  "div",
                  {
                    key: "address-field",
                    className: "relative z-10 mt-4",
                  },
                  [
                    React.createElement(
                      "label",
                      {
                        key: "address-label",
                        htmlFor: "address",
                        className: "text-lg font-medium text-blue-700",
                      },
                      [
                        "Adresa objekta ",
                        React.createElement(
                          "span",
                          {
                            key: "required",
                            className: "text-red-500 ml-1",
                          },
                          "*",
                        ),
                      ],
                    ),
                    React.createElement("input", {
                      key: "address-input",
                      id: "address",
                      placeholder: "Ulica i kućni broj",
                      value: formData.address,
                      onChange: (e) => updateFormData("address", e.target.value),
                      className:
                        "mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl w-full px-4",
                      required: true,
                    }),
                  ],
                ),

                React.createElement(
                  "div",
                  {
                    key: "city-phone-fields",
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4",
                  },
                  [
                    React.createElement(
                      "div",
                      {
                        key: "city-field",
                        className: "relative z-10",
                      },
                      [
                        React.createElement(
                          "label",
                          {
                            key: "city-label",
                            htmlFor: "city",
                            className: "text-lg font-medium text-blue-700",
                          },
                          [
                            "Grad ",
                            React.createElement(
                              "span",
                              {
                                key: "required",
                                className: "text-red-500 ml-1",
                              },
                              "*",
                            ),
                          ],
                        ),
                        React.createElement("input", {
                          key: "city-input",
                          id: "city",
                          placeholder: "Grad",
                          value: formData.city,
                          onChange: (e) => updateFormData("city", e.target.value),
                          className:
                            "mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl w-full px-4",
                          required: true,
                        }),
                      ],
                    ),
                    React.createElement(
                      "div",
                      {
                        key: "phone-field",
                        className: "relative z-10",
                      },
                      [
                        React.createElement(
                          "label",
                          {
                            key: "phone-label",
                            htmlFor: "phone",
                            className: "text-lg font-medium text-blue-700",
                          },
                          [
                            "Telefon ",
                            React.createElement(
                              "span",
                              {
                                key: "required",
                                className: "text-red-500 ml-1",
                              },
                              "*",
                            ),
                          ],
                        ),
                        React.createElement("input", {
                          key: "phone-input",
                          id: "phone",
                          placeholder: "Vaš broj telefona",
                          value: formData.phone,
                          onChange: (e) => updateFormData("phone", e.target.value),
                          className:
                            "mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl w-full px-4",
                          required: true,
                        }),
                      ],
                    ),
                  ],
                ),
              ],
            ),

            React.createElement(
              Card3D,
              {
                key: "service-card",
                className: "p-6 relative z-10 mb-6",
              },
              [
                React.createElement(
                  "label",
                  {
                    key: "service-label",
                    className: "text-lg font-medium text-blue-700 mb-4 block",
                  },
                  "Odaberite uslugu",
                ),

                React.createElement(
                  "div",
                  {
                    key: "service-options",
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  },
                  SERVICE_TYPES.map((service) =>
                    React.createElement(
                      "div",
                      {
                        key: service.id,
                        className: `border-2 rounded-xl p-4 cursor-pointer transition-all ${
                          selectedService === service.id
                            ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg"
                            : "border-gray-200 hover:border-yellow-300 bg-white"
                        }`,
                        onClick: () => setSelectedService(service.id),
                      },
                      [
                        React.createElement(
                          "div",
                          {
                            key: "service-content",
                            className: "flex items-start",
                          },
                          [
                            React.createElement(
                              "div",
                              {
                                key: "service-icon",
                                className: "mr-3",
                              },
                              [
                                React.createElement(
                                  "div",
                                  {
                                    key: "icon-wrapper",
                                    className: `p-2 rounded-full ${
                                      selectedService === service.id
                                        ? "bg-yellow-100 text-blue-600"
                                        : "bg-blue-100 text-blue-500"
                                    }`,
                                  },
                                  service.id === "facade"
                                    ? "🏢"
                                    : service.id === "pool"
                                      ? "🏊"
                                      : service.id === "yard"
                                        ? "🌳"
                                        : "✨",
                                ),
                              ],
                            ),
                            React.createElement("div", { key: "service-text" }, [
                              React.createElement(
                                "h3",
                                {
                                  key: "service-name",
                                  className: "font-medium text-blue-700",
                                },
                                service.name,
                              ),
                              React.createElement(
                                "p",
                                {
                                  key: "service-desc",
                                  className: "text-xs text-blue-600 mt-1",
                                },
                                service.description,
                              ),
                            ]),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),

            React.createElement(FunFactBox, { key: "fun-fact" }),

            React.createElement(
              Card3D,
              {
                key: "offer-card",
                className:
                  "bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 p-6 relative z-10",
              },
              [
                React.createElement(
                  "div",
                  {
                    key: "offer-content",
                    className: "flex items-center mb-2",
                  },
                  [
                    React.createElement(
                      "span",
                      {
                        key: "offer-icon",
                        className: "text-yellow-600 mr-2",
                      },
                      "🎯",
                    ),
                    React.createElement(
                      "h3",
                      {
                        key: "offer-title",
                        className: "font-medium text-blue-700",
                      },
                      "Posebna ponuda",
                    ),
                  ],
                ),
                React.createElement(
                  "p",
                  {
                    key: "offer-text",
                    className: "text-sm text-blue-600",
                  },
                  [
                    React.createElement(
                      "span",
                      {
                        key: "discount",
                        className: "font-bold",
                      },
                      "15% popusta",
                    ),
                    " na prvo čišćenje kada ispunite ovu formu do kraja!",
                  ],
                ),
              ],
            ),
          ],
        ),

        React.createElement(
          "div",
          {
            key: "navigation",
            className: "flex justify-end mt-8",
          },
          [
            React.createElement(
              Button3D,
              {
                key: "next-btn",
                onClick: handleNext,
              },
              ["Dalje ", React.createElement("span", { key: "arrow" }, "→")],
            ),
          ],
        ),
      ])

    // Step 2: Dimensions (simplified version)
    const renderDimensions = () =>
      React.createElement("div", { className: "space-y-6" }, [
        React.createElement(
          "div",
          {
            key: "header",
            className: "text-center mb-6",
          },
          [
            React.createElement(
              "h2",
              {
                key: "title",
                className:
                  "text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-2",
              },
              selectedService === "facade"
                ? "Dimenzije objekta"
                : selectedService === "pool"
                  ? "Detalji o bazenu"
                  : selectedService === "yard"
                    ? "Detalji o okućnici"
                    : "Detalji usluge",
            ),
            React.createElement(
              "p",
              {
                key: "subtitle",
                className: "text-blue-600",
              },
              selectedService === "facade"
                ? "Pomozite nam izračunati površinu fasade"
                : selectedService === "pool"
                  ? "Unesite informacije o vašem bazenu"
                  : selectedService === "yard"
                    ? "Opišite vašu okućnicu"
                    : "Unesite sve potrebne informacije",
            ),
          ],
        ),

        // Facade fields
        (selectedService === "facade" || selectedService === "complete") &&
          React.createElement(
            "div",
            {
              key: "facade-fields",
              className: "space-y-6",
            },
            [
              React.createElement(
                Card3D,
                {
                  key: "dimensions-card",
                  className: "p-6",
                },
                [
                  React.createElement(
                    "label",
                    {
                      key: "dimensions-label",
                      className: "text-lg font-medium text-blue-700",
                    },
                    "Dimenzije objekta",
                  ),
                  React.createElement(
                    "div",
                    {
                      key: "dimensions-inputs",
                      className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-3",
                    },
                    [
                      React.createElement("div", { key: "width-field" }, [
                        React.createElement(
                          "label",
                          {
                            key: "width-label",
                            htmlFor: "buildingWidth",
                            className: "text-md font-medium text-blue-700",
                          },
                          [
                            "Širina objekta (m) ",
                            React.createElement(
                              "span",
                              {
                                key: "required",
                                className: "text-red-500 ml-1",
                              },
                              "*",
                            ),
                          ],
                        ),
                        React.createElement("input", {
                          key: "width-input",
                          id: "buildingWidth",
                          type: "number",
                          placeholder: "npr. 10",
                          value: formData.buildingWidth,
                          onChange: (e) => updateFormData("buildingWidth", e.target.value),
                          className:
                            "mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl w-full px-4",
                          required: true,
                        }),
                      ]),
                      React.createElement("div", { key: "length-field" }, [
                        React.createElement(
                          "label",
                          {
                            key: "length-label",
                            htmlFor: "buildingLength",
                            className: "text-md font-medium text-blue-700",
                          },
                          [
                            "Dužina objekta (m) ",
                            React.createElement(
                              "span",
                              {
                                key: "required",
                                className: "text-red-500 ml-1",
                              },
                              "*",
                            ),
                          ],
                        ),
                        React.createElement("input", {
                          key: "length-input",
                          id: "buildingLength",
                          type: "number",
                          placeholder: "npr. 15",
                          value: formData.buildingLength,
                          onChange: (e) => updateFormData("buildingLength", e.target.value),
                          className:
                            "mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl w-full px-4",
                          required: true,
                        }),
                      ]),
                    ],
                  ),
                ],
              ),

              React.createElement(
                Card3D,
                {
                  key: "sides-card",
                  className: "p-6",
                },
                [
                  React.createElement(
                    "label",
                    {
                      key: "sides-label",
                      className: "text-lg font-medium text-blue-700",
                    },
                    "Koliko strana objekta želite čistiti?",
                  ),
                  React.createElement(
                    "div",
                    {
                      key: "sides-options",
                      className: "grid grid-cols-2 md:grid-cols-4 gap-3 mt-4",
                    },
                    [1, 2, 3, 4].map((sides) =>
                      React.createElement(
                        "div",
                        {
                          key: sides,
                          className: `border-2 rounded-xl p-4 cursor-pointer transition-all text-center shadow-md ${
                            formData.facadeSides === sides
                              ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg"
                              : "border-gray-200 hover:border-yellow-300 bg-white"
                          }`,
                          onClick: () => updateFormData("facadeSides", sides),
                        },
                        [
                          React.createElement(
                            "div",
                            {
                              key: "sides-content",
                              className: "flex flex-col items-center",
                            },
                            [
                              React.createElement(
                                "div",
                                {
                                  key: "sides-visual",
                                  className: "w-12 h-12 mb-2 flex items-center justify-center",
                                },
                                [
                                  React.createElement("div", {
                                    key: "sides-box",
                                    className: `w-8 h-8 border-2 rounded ${
                                      formData.facadeSides === sides ? "border-blue-500 bg-blue-100" : "border-gray-300"
                                    }`,
                                  }),
                                ],
                              ),
                              React.createElement(
                                "span",
                                {
                                  key: "sides-text",
                                  className: "font-medium text-sm",
                                },
                                sides === 1 ? "1 strana" : `${sides} strane`,
                              ),
                              React.createElement(
                                "span",
                                {
                                  key: "sides-desc",
                                  className: "text-xs text-gray-500 mt-1",
                                },
                                sides === 1
                                  ? "Prednja"
                                  : sides === 2
                                    ? "Prednja + stražnja"
                                    : sides === 3
                                      ? "3 strane"
                                      : "Sve strane",
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),

              React.createElement(
                Card3D,
                {
                  key: "floors-card",
                  className: "p-6",
                },
                [
                  React.createElement(
                    "label",
                    {
                      key: "floors-label",
                      className: "text-lg font-medium text-blue-700",
                    },
                    "Broj katova (0 = prizemnica)",
                  ),
                  React.createElement(
                    "div",
                    {
                      key: "floors-controls",
                      className: "flex items-center space-x-4 mt-3",
                    },
                    [
                      React.createElement(
                        "button",
                        {
                          key: "floors-minus",
                          onClick: (e) => {
                            e.preventDefault()
                            updateFormData("floors", Math.max(0, formData.floors - 1))
                          },
                          className:
                            "h-12 w-12 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-xl font-bold text-blue-700 shadow-md hover:bg-blue-200",
                        },
                        "-",
                      ),
                      React.createElement(
                        "div",
                        {
                          key: "floors-display",
                          className:
                            "w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-300 border-2 border-yellow-400 flex items-center justify-center shadow-lg",
                        },
                        [
                          React.createElement(
                            "span",
                            {
                              key: "floors-number",
                              className: "text-2xl font-bold text-blue-700",
                            },
                            formData.floors,
                          ),
                        ],
                      ),
                      React.createElement(
                        "button",
                        {
                          key: "floors-plus",
                          onClick: (e) => {
                            e.preventDefault()
                            updateFormData("floors", formData.floors + 1)
                          },
                          className:
                            "h-12 w-12 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-xl font-bold text-blue-700 shadow-md hover:bg-blue-200",
                        },
                        "+",
                      ),
                    ],
                  ),
                  React.createElement(
                    "p",
                    {
                      key: "floors-note",
                      className: "text-xs text-gray-500 mt-1",
                    },
                    "0 = prizemnica (3m), 1 = prizemlje + 1 kat (6m), itd.",
                  ),
                ],
              ),

              React.createElement(
                Card3D,
                {
                  key: "condition-card",
                  className: "p-6",
                },
                [
                  React.createElement(
                    "label",
                    {
                      key: "condition-label",
                      className: "text-lg font-medium text-blue-700",
                    },
                    "U kakvom je stanju fasada?",
                  ),
                  React.createElement(
                    "div",
                    {
                      key: "condition-slider",
                      className: "mt-6 px-4",
                    },
                    [
                      React.createElement("input", {
                        key: "slider",
                        type: "range",
                        min: "1",
                        max: "5",
                        value: formData.facadeCondition,
                        onChange: (e) => updateFormData("facadeCondition", Number.parseInt(e.target.value)),
                        className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
                      }),
                      React.createElement(
                        "div",
                        {
                          key: "slider-labels",
                          className: "flex justify-between mt-4",
                        },
                        [
                          React.createElement(
                            "div",
                            {
                              key: "label-1",
                              className: "flex flex-col items-center",
                            },
                            [
                              React.createElement(
                                "span",
                                {
                                  key: "text-1",
                                  className: "text-sm font-medium mt-1",
                                },
                                "Jako loša",
                              ),
                              React.createElement(
                                "span",
                                {
                                  key: "price-1",
                                  className: "text-xs text-gray-500",
                                },
                                "5.5-6€ po m²",
                              ),
                            ],
                          ),
                          React.createElement(
                            "div",
                            {
                              key: "label-2",
                              className: "flex flex-col items-center",
                            },
                            [
                              React.createElement(
                                "span",
                                {
                                  key: "text-2",
                                  className: "text-sm font-medium mt-1",
                                },
                                "Srednja",
                              ),
                              React.createElement(
                                "span",
                                {
                                  key: "price-2",
                                  className: "text-xs text-gray-500",
                                },
                                "4-5€ po m²",
                              ),
                            ],
                          ),
                          React.createElement(
                            "div",
                            {
                              key: "label-3",
                              className: "flex flex-col items-center",
                            },
                            [
                              React.createElement(
                                "span",
                                {
                                  key: "text-3",
                                  className: "text-sm font-medium mt-1",
                                },
                                "Održavanje",
                              ),
                              React.createElement(
                                "span",
                                {
                                  key: "price-3",
                                  className: "text-xs text-gray-500",
                                },
                                "4€ po m²",
                              ),
                            ],
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ],
          ),

        // Pool fields
        (selectedService === "pool" || (selectedService === "complete" && hasPool)) &&
          React.createElement(
            "div",
            {
              key: "pool-fields",
              className: "space-y-6",
            },
            [
              selectedService === "complete" &&
                React.createElement(
                  Card3D,
                  {
                    key: "has-pool-card",
                    className: "p-6 mb-4",
                  },
                  [
                    React.createElement(
                      "div",
                      {
                        key: "has-pool-content",
                        className: "flex items-center space-x-2",
                      },
                      [
                        React.createElement("input", {
                          key: "has-pool-checkbox",
                          type: "checkbox",
                          id: "hasPool",
                          checked: hasPool,
                          onChange: (e) => setHasPool(e.target.checked),
                          className: "h-5 w-5",
                        }),
                        React.createElement(
                          "label",
                          {
                            key: "has-pool-label",
                            htmlFor: "hasPool",
                            className: "text-lg font-medium text-blue-700 cursor-pointer",
                          },
                          "Imam bazen koji treba očistiti",
                        ),
                      ],
                    ),
                  ],
                ),

              React.createElement(
                Card3D,
                {
                  key: "pool-size-card",
                  className: "p-6",
                },
                [
                  React.createElement(
                    "label",
                    {
                      key: "pool-size-label",
                      className: "text-lg font-medium text-blue-700 mb-4 block",
                    },
                    "Veličina bazena",
                  ),
                  React.createElement(
                    "div",
                    {
                      key: "pool-size-options",
                      className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                    },
                    [
                      ["small", "Mali bazen", "do 20m²", "400€"],
                      ["medium", "Srednji bazen", "20-40m²", "600€"],
                      ["large", "Veliki bazen", "preko 40m²", "800€"],
                    ].map(([size, name, area, price]) =>
                      React.createElement(
                        "div",
                        {
                          key: size,
                          className: `border-2 rounded-xl p-4 cursor-pointer transition-all ${
                            formData.poolSize === size
                              ? "border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg"
                              : "border-gray-200 hover:border-yellow-300 bg-white"
                          }`,
                          onClick: () => updateFormData("poolSize", size),
                        },
                        [
                          React.createElement(
                            "div",
                            {
                              key: "pool-size-content",
                              className: "flex items-center space-x-2",
                            },
                            [
                              React.createElement("input", {
                                key: "pool-size-radio",
                                type: "radio",
                                value: size,
                                checked: formData.poolSize === size,
                                onChange: () => updateFormData("poolSize", size),
                                className: "text-blue-600",
                              }),
                              React.createElement("div", { key: "pool-size-text" }, [
                                React.createElement(
                                  "p",
                                  {
                                    key: "pool-size-name",
                                    className: "font-medium text-blue-700",
                                  },
                                  name,
                                ),
                                React.createElement(
                                  "p",
                                  {
                                    key: "pool-size-area",
                                    className: "text-xs text-blue-600",
                                  },
                                  area,
                                ),
                                React.createElement(
                                  "p",
                                  {
                                    key: "pool-size-price",
                                    className: "text-xs text-blue-600 mt-1",
                                  },
                                  `Okvirna cijena: ${price}`,
                                ),
                              ]),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),

        // Yard fields
        (selectedService === "yard" || selectedService === "complete" || formData.cleanYard) &&
          React.createElement(
            "div",
            {
              key: "yard-fields",
              className: "space-y-6",
            },
            [
              React.createElement(
                Card3D,
                {
                  key: "yard-area-card",
                  className: "p-6",
                },
                [
                  React.createElement(
                    "label",
                    {
                      key: "yard-area-label",
                      htmlFor: "yardSquareMeters",
                      className: "text-lg font-medium text-blue-700",
                    },
                    "Površina okućnice (m²)",
                  ),
                  React.createElement("input", {
                    key: "yard-area-input",
                    id: "yardSquareMeters",
                    type: "number",
                    placeholder: "npr. 50",
                    value: formData.yardSquareMeters,
                    onChange: (e) => updateFormData("yardSquareMeters", e.target.value),
                    className:
                      "mt-2 h-12 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl w-full px-4",
                  }),
                  React.createElement(
                    "p",
                    {
                      key: "yard-area-note",
                      className: "text-xs text-gray-500 mt-1",
                    },
                    "Približna površina okućnice koju treba očistiti",
                  ),
                ],
              ),
            ],
          ),

        // Additional services
        selectedService !== "yard" &&
          selectedService !== "pool" &&
          React.createElement(
            Card3D,
            {
              key: "additional-services-card",
              className: "p-6",
            },
            [
              React.createElement(
                "div",
                {
                  key: "clean-yard-option",
                  className: "flex items-center space-x-2 mb-4",
                },
                [
                  React.createElement("input", {
                    key: "clean-yard-checkbox",
                    type: "checkbox",
                    id: "cleanYard",
                    checked: formData.cleanYard,
                    onChange: (e) => updateFormData("cleanYard", e.target.checked),
                    className: "h-5 w-5",
                  }),
                  React.createElement(
                    "label",
                    {
                      key: "clean-yard-label",
                      htmlFor: "cleanYard",
                      className: "text-lg font-medium text-blue-700 cursor-pointer",
                    },
                    "Treba li očistiti i okućnicu?",
                  ),
                ],
              ),
              React.createElement(
                "div",
                {
                  key: "car-wash-option",
                  className: "flex items-center space-x-2",
                },
                [
                  React.createElement("input", {
                    key: "car-wash-checkbox",
                    type: "checkbox",
                    id: "carWash",
                    checked: formData.carWash,
                    onChange: (e) => updateFormData("carWash", e.target.checked),
                    className: "h-5 w-5",
                  }),
                  React.createElement(
                    "label",
                    {
                      key: "car-wash-label",
                      htmlFor: "carWash",
                      className: "text-lg font-medium text-blue-700 cursor-pointer",
                    },
                    "Želite li i vanjsko pranje automobila? (25€)",
                  ),
                ],
              ),
            ],
          ),

        React.createElement(FunFactBox, { key: "fun-fact-2" }),

        // Price estimation
        estimatedPrice &&
          React.createElement(
            "div",
            {
              key: "price-estimation",
              className:
                "mt-3 p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl shadow-lg",
            },
            [
              React.createElement(
                "div",
                {
                  key: "price-header",
                  className: "flex items-center mb-2",
                },
                [
                  React.createElement(
                    "span",
                    {
                      key: "price-icon",
                      className: "text-yellow-500 mr-2",
                    },
                    "✨",
                  ),
                  React.createElement(
                    "h4",
                    {
                      key: "price-title",
                      className: "font-medium text-blue-700",
                    },
                    "Okvirna procjena cijene",
                  ),
                ],
              ),
              React.createElement(
                "div",
                {
                  key: "price-content",
                  className: "mt-3",
                },
                [
                  (selectedService === "facade" || selectedService === "complete") &&
                    adjustedArea &&
                    React.createElement(
                      "p",
                      {
                        key: "facade-price",
                        className: "text-sm font-medium text-blue-700",
                      },
                      [
                        "Cijena čišćenja fasade: ",
                        React.createElement(
                          "span",
                          {
                            key: "facade-price-value",
                            className: "text-lg font-bold text-blue-800",
                          },
                          estimatedPrice.min === estimatedPrice.max
                            ? `${estimatedPrice.min}€`
                            : `${estimatedPrice.min}€ - ${estimatedPrice.max}€`,
                        ),
                      ],
                    ),
                  estimatedPrice.yardPrice &&
                    React.createElement(
                      "p",
                      {
                        key: "yard-price",
                        className: "text-sm font-medium text-blue-700 mt-2",
                      },
                      `Čišćenje okućnice: ${estimatedPrice.yardPrice}€`,
                    ),
                  estimatedPrice.poolPrice &&
                    React.createElement(
                      "p",
                      {
                        key: "pool-price",
                        className: "text-sm font-medium text-blue-700 mt-2",
                      },
                      `Čišćenje bazena: ${estimatedPrice.poolPrice}€`,
                    ),
                  formData.carWash &&
                    estimatedPrice.carWashPrice &&
                    React.createElement(
                      "p",
                      {
                        key: "car-wash-price",
                        className: "text-sm font-medium text-blue-700 mt-2",
                      },
                      `Vanjsko pranje automobila: ${estimatedPrice.carWashPrice}€`,
                    ),
                  React.createElement(
                    "div",
                    {
                      key: "total-price",
                      className: "mt-2 pt-2 border-t border-yellow-300",
                    },
                    [
                      React.createElement(
                        "p",
                        {
                          key: "total-label",
                          className: "text-sm font-medium text-blue-700",
                        },
                        "Ukupna cijena:",
                      ),
                      React.createElement(
                        "p",
                        {
                          key: "total-value",
                          className: "text-lg font-bold text-blue-800",
                        },
                        (() => {
                          const total =
                            estimatedPrice.min +
                            (estimatedPrice.yardPrice || 0) +
                            (estimatedPrice.poolPrice || 0) +
                            (estimatedPrice.carWashPrice || 0)
                          const totalMax =
                            estimatedPrice.max !== estimatedPrice.min
                              ? estimatedPrice.max +
                                (estimatedPrice.yardPrice || 0) +
                                (estimatedPrice.poolPrice || 0) +
                                (estimatedPrice.carWashPrice || 0)
                              : null
                          return totalMax ? `${total}€ - ${totalMax}€` : `${total}€`
                        })(),
                      ),
                      discountApplied &&
                        React.createElement(
                          "p",
                          {
                            key: "discount-note",
                            className: "text-xs text-green-600 mt-1 font-medium",
                          },
                          "Uključen popust od 15% za prvo čišćenje!",
                        ),
                    ],
                  ),
                ],
              ),
            ],
          ),

        React.createElement(
          "div",
          {
            key: "navigation-2",
            className: "flex justify-between mt-8",
          },
          [
            React.createElement(
              Button3D,
              {
                key: "back-btn-2",
                onClick: handleBack,
                className: "bg-gradient-to-br from-gray-100 to-gray-200 text-blue-600",
              },
              ["← Natrag"],
            ),
            React.createElement(
              Button3D,
              {
                key: "next-btn-2",
                onClick: handleNext,
              },
              ["Dalje ", React.createElement("span", { key: "arrow" }, "→")],
            ),
          ],
        ),
      ])

    // Step 3: Review
    const renderReview = () =>
      React.createElement("div", { className: "space-y-6" }, [
        React.createElement(
          "div",
          {
            key: "header",
            className: "text-center mb-6",
          },
          [
            React.createElement(
              "h2",
              {
                key: "title",
                className:
                  "text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-2",
              },
              "Pregled i potvrda",
            ),
            React.createElement(
              "p",
              {
                key: "subtitle",
                className: "text-blue-600",
              },
              "Provjerite unesene podatke i potvrdite zahtjev",
            ),
          ],
        ),

        React.createElement(
          "div",
          {
            key: "review-content",
            className: "space-y-6",
          },
          [
            React.createElement(
              Card3D,
              {
                key: "contact-review",
                className: "p-6",
              },
              [
                React.createElement(
                  "h4",
                  {
                    key: "contact-title",
                    className: "font-bold text-lg text-blue-700 mb-2",
                  },
                  "Kontakt podaci",
                ),
                React.createElement("p", { key: "email-review" }, [
                  React.createElement("span", { key: "email-label", className: "font-medium" }, "Email: "),
                  formData.email,
                ]),
                React.createElement("p", { key: "address-review" }, [
                  React.createElement("span", { key: "address-label", className: "font-medium" }, "Adresa: "),
                  formData.address,
                ]),
                React.createElement("p", { key: "city-review" }, [
                  React.createElement("span", { key: "city-label", className: "font-medium" }, "Grad: "),
                  formData.city,
                ]),
                React.createElement("p", { key: "phone-review" }, [
                  React.createElement("span", { key: "phone-label", className: "font-medium" }, "Telefon: "),
                  formData.phone,
                ]),
              ],
            ),

            React.createElement(
              Card3D,
              {
                key: "service-review",
                className: "p-6",
              },
              [
                React.createElement(
                  "h4",
                  {
                    key: "service-title",
                    className: "font-bold text-lg text-blue-700 mb-2",
                  },
                  "Odabrana usluga",
                ),
                React.createElement("p", { key: "service-name" }, [
                  React.createElement("span", { key: "service-label", className: "font-medium" }, "Usluga: "),
                  SERVICE_TYPES.find((s) => s.id === selectedService)?.name || "Čišćenje fasade",
                ]),
              ],
            ),

            estimatedPrice &&
              React.createElement(
                "div",
                {
                  key: "price-review",
                  className:
                    "p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl shadow-lg",
                },
                [
                  React.createElement(
                    "h4",
                    {
                      key: "price-title",
                      className: "font-bold text-lg text-blue-700 mb-2 text-center",
                    },
                    "Okvirna procjena cijene",
                  ),
                  React.createElement(
                    "p",
                    {
                      key: "total-price-review",
                      className: "text-lg font-bold text-center text-blue-700",
                    },
                    (() => {
                      const total =
                        estimatedPrice.min +
                        (estimatedPrice.yardPrice || 0) +
                        (estimatedPrice.poolPrice || 0) +
                        (estimatedPrice.carWashPrice || 0)
                      const totalMax =
                        estimatedPrice.max !== estimatedPrice.min
                          ? estimatedPrice.max +
                            (estimatedPrice.yardPrice || 0) +
                            (estimatedPrice.poolPrice || 0) +
                            (estimatedPrice.carWashPrice || 0)
                          : null
                      return totalMax ? `${total}€ - ${totalMax}€` : `${total}€`
                    })(),
                  ),
                  React.createElement(
                    "p",
                    {
                      key: "discount-review",
                      className: "text-xs text-gray-500 mt-2 text-center",
                    },
                    "*Ovo je okvirna procjena s uračunatim popustom. Konačna cijena ovisi o stanju objekta i drugim faktorima.",
                  ),
                ],
              ),

            React.createElement(
              Card3D,
              {
                key: "message-card",
                className: "p-6",
              },
              [
                React.createElement(
                  "label",
                  {
                    key: "message-label",
                    htmlFor: "message",
                    className: "text-lg font-medium text-blue-700",
                  },
                  "Dodatna poruka (opcionalno)",
                ),
                React.createElement("textarea", {
                  key: "message-input",
                  id: "message",
                  placeholder: "Dodatne napomene ili pitanja...",
                  value: formData.message,
                  onChange: (e) => updateFormData("message", e.target.value),
                  className:
                    "mt-2 text-lg border-2 border-gray-200 focus:border-yellow-400 rounded-xl min-h-[120px] w-full p-4",
                  rows: 4,
                }),
              ],
            ),
          ],
        ),

        React.createElement(
          "div",
          {
            key: "navigation-3",
            className: "flex justify-between mt-8",
          },
          [
            React.createElement(
              Button3D,
              {
                key: "back-btn-3",
                onClick: handleBack,
                className: "bg-gradient-to-br from-gray-100 to-gray-200 text-blue-600",
              },
              ["← Natrag"],
            ),
            React.createElement(
              Button3D,
              {
                key: "submit-btn",
                onClick: handleSubmit,
                disabled: isSubmitting,
              },
              [
                isSubmitting ? "Šalje se..." : "Pošalji zahtjev ",
                !isSubmitting && React.createElement("span", { key: "sparkle" }, "✨"),
              ],
            ),
          ],
        ),
      ])

    // Step 4: Success
    const renderSuccess = () =>
      React.createElement("div", { className: "space-y-8" }, [
        React.createElement(
          "div",
          {
            key: "success-header",
            className: "text-center space-y-4 mb-8",
          },
          [
            React.createElement(
              "div",
              {
                key: "checkmark",
                className:
                  "inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-green-200 border-4 border-green-300 shadow-xl",
              },
              [
                React.createElement(
                  "span",
                  {
                    key: "check-icon",
                    className: "text-6xl text-green-600",
                  },
                  "✅",
                ),
              ],
            ),
            React.createElement(
              "h2",
              {
                key: "success-title",
                className:
                  "text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800",
              },
              "Hvala na vašem upitu!",
            ),
            React.createElement(
              "p",
              {
                key: "success-subtitle",
                className: "text-xl text-blue-600",
              },
              "Vaš zahtjev za ponudu je uspješno poslan. Kontaktirat ćemo vas u najkraćem mogućem roku.",
            ),
            React.createElement(
              "div",
              {
                key: "discount-highlight",
                className:
                  "mt-4 inline-block bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-400 rounded-xl px-6 py-3 shadow-lg",
              },
              [
                React.createElement(
                  "p",
                  {
                    key: "discount-text",
                    className: "text-lg font-medium text-blue-800",
                  },
                  "Ostvarili ste 15% popusta na prvo čišćenje!",
                ),
              ],
            ),
          ],
        ),

        React.createElement(
          "div",
          {
            key: "success-content",
            className: "bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 shadow-xl",
          },
          [
            React.createElement(
              "h3",
              {
                key: "summary-title",
                className: "text-2xl font-bold text-blue-800 mb-6 text-center",
              },
              "Sažetak vašeg upita",
            ),
            React.createElement(
              "div",
              {
                key: "summary-content",
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
              },
              [
                React.createElement(
                  "div",
                  {
                    key: "summary-left",
                    className: "space-y-6",
                  },
                  [
                    React.createElement(
                      Card3D,
                      {
                        key: "summary-contact",
                        className: "p-4",
                      },
                      [
                        React.createElement(
                          "h4",
                          {
                            key: "summary-contact-title",
                            className: "font-bold text-lg text-blue-700 mb-2",
                          },
                          "Kontakt podaci",
                        ),
                        React.createElement("p", { key: "summary-email" }, [
                          React.createElement("span", { key: "label", className: "font-medium" }, "Email: "),
                          formData.email,
                        ]),
                        React.createElement("p", { key: "summary-address" }, [
                          React.createElement("span", { key: "label", className: "font-medium" }, "Adresa: "),
                          formData.address,
                        ]),
                        React.createElement("p", { key: "summary-city" }, [
                          React.createElement("span", { key: "label", className: "font-medium" }, "Grad: "),
                          formData.city,
                        ]),
                        React.createElement("p", { key: "summary-phone" }, [
                          React.createElement("span", { key: "label", className: "font-medium" }, "Telefon: "),
                          formData.phone,
                        ]),
                        React.createElement(
                          "div",
                          {
                            key: "summary-service",
                            className: "mt-2 pt-2 border-t border-gray-200",
                          },
                          [
                            React.createElement("p", { key: "service-text" }, [
                              React.createElement(
                                "span",
                                { key: "label", className: "font-medium" },
                                "Odabrana usluga: ",
                              ),
                              SERVICE_TYPES.find((s) => s.id === selectedService)?.name || "Čišćenje fasade",
                            ]),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
                React.createElement(
                  "div",
                  {
                    key: "summary-right",
                    className: "flex flex-col items-center justify-center",
                  },
                  [
                    estimatedPrice &&
                      React.createElement(
                        "div",
                        {
                          key: "final-price",
                          className:
                            "bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-4 shadow-lg w-full max-w-sm",
                        },
                        [
                          React.createElement(
                            "h4",
                            {
                              key: "final-price-title",
                              className: "font-bold text-lg text-blue-700 mb-2 text-center",
                            },
                            "Okvirna procjena cijene",
                          ),
                          React.createElement(
                            "div",
                            {
                              key: "final-price-total",
                              className: "flex justify-between items-center text-lg font-bold",
                            },
                            [
                              React.createElement("span", { key: "total-label" }, "Ukupna cijena:"),
                              React.createElement(
                                "span",
                                {
                                  key: "total-value",
                                  className: "text-blue-700",
                                },
                                (() => {
                                  const total =
                                    estimatedPrice.min +
                                    (estimatedPrice.yardPrice || 0) +
                                    (estimatedPrice.poolPrice || 0) +
                                    (estimatedPrice.carWashPrice || 0)
                                  const totalMax =
                                    estimatedPrice.max !== estimatedPrice.min
                                      ? estimatedPrice.max +
                                        (estimatedPrice.yardPrice || 0) +
                                        (estimatedPrice.poolPrice || 0) +
                                        (estimatedPrice.carWashPrice || 0)
                                      : null
                                  return totalMax ? `${total}€ - ${totalMax}€` : `${total}€`
                                })(),
                              ),
                            ],
                          ),
                        ],
                      ),
                    React.createElement(
                      "div",
                      {
                        key: "next-steps",
                        className:
                          "bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-4 shadow-lg mt-6 w-full max-w-sm",
                      },
                      [
                        React.createElement(
                          "h4",
                          {
                            key: "steps-title",
                            className: "font-bold text-lg text-blue-700 mb-2 text-center",
                          },
                          "Sljedeći koraci",
                        ),
                        React.createElement(
                          "ul",
                          {
                            key: "steps-list",
                            className: "text-sm text-blue-600 list-disc pl-5 space-y-1",
                          },
                          [
                            React.createElement("li", { key: "step-1" }, "Kontaktirat ćemo vas u roku od 24 sata"),
                            React.createElement("li", { key: "step-2" }, "Dogovorit ćemo termin za besplatni pregled"),
                            React.createElement("li", { key: "step-3" }, "Poslat ćemo vam detaljnu ponudu"),
                            React.createElement(
                              "li",
                              { key: "step-4" },
                              "Nakon prihvaćanja ponude, dogovaramo termin izvođenja",
                            ),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),

        React.createElement(
          "div",
          {
            key: "new-request",
            className: "pt-6 text-center",
          },
          [
            React.createElement(
              Button3D,
              {
                key: "new-request-btn",
                onClick: () => {
                  setStep(1)
                  setProgress(0)
                  setFormData({
                    email: "",
                    address: "",
                    name: "",
                    phone: "",
                    city: "",
                    postalCode: "",
                    message: "",
                    floors: 0,
                    windowsSmall: 0,
                    windowsDouble: 0,
                    balconyType: "",
                    balconyCount: 0,
                    buildingWidth: "",
                    buildingLength: "",
                    facadeCondition: 3,
                    facadeSides: 4,
                    yardSquareMeters: "",
                    yardCondition: 3,
                    hasPlants: false,
                    hasTrees: false,
                    poolSize: "medium",
                    poolType: "standard",
                    poolLastCleaned: "",
                    cleanYard: false,
                    carWash: false,
                  })
                },
                className: "bg-gradient-to-br from-blue-500 to-blue-600",
              },
              ["Zatraži novu ponudu ", React.createElement("span", { key: "sparkle" }, "✨")],
            ),
          ],
        ),
      ])

    return React.createElement(
      "div",
      {
        className: "container max-w-3xl mx-auto py-12 px-4",
      },
      [
        React.createElement(
          "div",
          {
            key: "form-container",
            className: "relative",
          },
          [
            // Progress bar
            React.createElement(
              "div",
              {
                key: "progress-bar",
                className: "relative h-4 bg-gray-200 rounded-full mb-8 overflow-hidden shadow-inner",
              },
              [
                React.createElement("div", {
                  key: "progress-fill",
                  className:
                    "absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full z-10 transition-all duration-500",
                  style: { width: `${progress}%` },
                }),
              ],
            ),

            React.createElement(
              "div",
              {
                key: "form-content",
                className: "bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-100",
              },
              [
                step === 1 && renderContactInfo(),
                step === 2 && renderDimensions(),
                step === 3 && renderReview(),
                step === 4 && renderSuccess(),
              ],
            ),
          ],
        ),
      ],
    )
  }

  // Render the component
  const container = document.getElementById("cleaning-service-form-container")
  if (container) {
    const root = ReactDOM.createRoot(container)
    root.render(React.createElement(CleaningServiceForm))
  }

  // Access cleaningFormAjax from the global scope
  if (typeof cleaningFormAjax === "undefined") {
    console.error("cleaningFormAjax is not defined. Make sure it is enqueued correctly.")
    return
  }
})()
