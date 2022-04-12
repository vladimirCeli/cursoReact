import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Box, Flex, Spacer, Tag, Text } from '@chakra-ui/react'
import * as API from '../services/launches'

export function RocketDetails() {
    const { rocketId } = useParams()
    const [rocket, setRocket] = useState({})

    useEffect(() => {
      
    }, [rocketId])

    return (
        <Box bg='gray.100' p={4} m={4} borderRadius='lg'>
            {!rocket ? (
                <div>
                    Loading...
                </div>
            ) : (
                <>
                  <div>HELLO</div>
                </>
                
            )}

        </Box>
    )
}